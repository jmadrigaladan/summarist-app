import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { usePathname } from "next/navigation";
import { IoBookmarkOutline, IoText } from "react-icons/io5";
import { RiBallPenLine } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { openAuthModal } from "@/redux/modalSlice";
import Link from "next/link";
import { signOutUser } from "@/redux/userSlice";
import { auth } from "@/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import AuthModal from "@/components/modals/AuthModal";
import { setUser } from "@/redux/userSlice";
import { signOut } from "firebase/auth";
import { RxLetterCaseCapitalize } from "react-icons/rx";

export default function Sidebar() {
  const pathname = usePathname();
  const [modalsNeedToOpen, setModalNeedsToOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(
        setUser({
          email: currentUser.email,
          uid: currentUser.uid,
        })
      );
    });

    return unsubscribe;
  }, []);
  const [fontSize, setFontSize] = useState("16px");

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
  }

  function handleLogIn() {
    dispatch(openAuthModal());
    setModalNeedsToOpen(true);
  }

  return (
    <>
      {modalsNeedToOpen ? <AuthModal /> : <></>}
      <div className="bg-[#f7faf9] w-[200px] h-screen fixed hidden md:inline">
        <div className="flex justify-center">
          <figure className="max-w-[160px] flex justify-center items-center mt-[20px]">
            <img className="" src={"/assets/logo.png"} alt="" />
          </figure>
        </div>
        <div className="flex flex-col justify-between pb-[20px] flex-1">
          {/* sidebar wrapper */}
          <div className="mt-[40px]">
            {/* sidebar top */}
            <Link href={"/for-you"}>
              <div className="flex items-center h-[56px] hover:bg-[#f0efef]">
                <div
                  className={`w-[5px] ${
                    pathname == "/for-you" ? "bg-[#2bd97c]" : ""
                  } h-[56px] mr-[16px]`}
                ></div>
                <AiOutlineHome className="w-[24px] h-[24px] mr-[8px]" />
                <div>For you</div>
              </div>
            </Link>
            <Link href={"/library"}>
              <div className="flex items-center h-[56px] hover:bg-[#f0efef]">
                <div
                  className={`w-[5px] ${
                    pathname == "/library" ? "bg-[#2bd97c]" : ""
                  } h-[56px] mr-[16px]`}
                ></div>
                <IoBookmarkOutline className="w-[24px] h-[24px] mr-[8px]" />
                <div>My Library</div>
              </div>
            </Link>
            <div className="cursor-not-allowed">
              <div className="flex items-center h-[56px] ">
                <div className="w-[5px] h-[56px] mr-[16px]"></div>
                <RiBallPenLine className="w-[24px] h-[24px] mr-[8px]" />
                <div>Highlights</div>
              </div>
            </div>
            <div className="cursor-not-allowed">
              <div className="flex items-center h-[56px] ">
                <div className="w-[5px] h-[56px] mr-[16px]"></div>
                <AiOutlineSearch className="w-[24px] h-[24px] mr-[8px]" />
                <div>Search</div>
              </div>
            </div>
            {/* font size wrapper */}
            {pathname.includes("/player") ? (
              <>
                <div className="flex items-center h-[56px] text-[#032b41] ">
                  <div className="flex gap-[8px] ml-[24px] items-center">
                    <div className="border-b-[3px] border-[#2bd97c] cursor-pointer">
                      <RxLetterCaseCapitalize className="w-[20px] h-[20px]" />
                    </div>
                    <div className="">
                      <RxLetterCaseCapitalize className="w-[24px] h-[24px]" />
                    </div>
                    <div className="">
                      <RxLetterCaseCapitalize className="w-[28px] h-[28px]" />
                    </div>
                    <div className="">
                      <RxLetterCaseCapitalize className="w-[32px] h-[32px]" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <div
            className={`${
              pathname.includes("/player") ? "mt-[120px]" : "mt-[200px]"
            }`}
          >
            {/* sidebar bottom */}
            <Link href={"/settings"}>
              <div className="flex items-center h-[56px] hover:bg-[#f0efef]">
                <div
                  className={`w-[5px] ${
                    pathname == "/settings" ? "bg-[#2bd97c]" : ""
                  } h-[56px] mr-[16px]`}
                ></div>
                <SlSettings className="w-[24px] h-[24px] mr-[8px]" />
                <div>Settings</div>
              </div>
            </Link>
            <div className="cursor-not-allowed">
              <div className="flex items-center h-[56px] ">
                <div className="w-[5px]  h-[56px] mr-[16px]"></div>
                <AiOutlineQuestionCircle className="w-[24px] h-[24px] mr-[8px]" />
                <div>Help & Support</div>
              </div>
            </div>
            {user.email ? (
              <>
                <div
                  className="flex items-center h-[56px] hover:bg-[#f0efef] cursor-pointer"
                  onClick={handleSignOut}
                >
                  <div className="w-[5px]  h-[56px] mr-[16px]"></div>
                  <FiLogOut className="w-[24px] h-[24px] mr-[8px]" />
                  <div>Log Out</div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="flex items-center h-[56px] hover:bg-[#f0efef] cursor-pointer"
                  onClick={handleLogIn}
                >
                  <div className="w-[5px]  h-[56px] mr-[16px]"></div>
                  <FiLogIn className="w-[24px] h-[24px] mr-[8px]" />
                  <div>Login</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
