import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { usePathname } from "next/navigation";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiBallPenLine } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { FiLogIn } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { openAuthModal } from "@/redux/modalSlice";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-[#f7faf9] w-[200px] h-screen fixed ">
        <div className="flex justify-center">
          <figure className="max-w-[160px] flex justify-center items-center mt-[20px]">
            <img className="" src={"/assets/logo.png"} alt="" />
          </figure>
        </div>
        <div className="flex flex-col justify-between pb-[20px]">
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
            <Link href={"/"} className="cursor-not-allowed">
              <div className="flex items-center h-[56px] ">
                <div className="w-[5px] h-[56px] mr-[16px]"></div>
                <RiBallPenLine className="w-[24px] h-[24px] mr-[8px]" />
                <div>Highlights</div>
              </div>
            </Link>
            <Link href={"/"} className="cursor-not-allowed">
              <div className="flex items-center h-[56px] ">
                <div className="w-[5px] h-[56px] mr-[16px]"></div>
                <AiOutlineSearch className="w-[24px] h-[24px] mr-[8px]" />
                <div>Search</div>
              </div>
            </Link>
          </div>
          <div className="mt-[240px]">
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
            <Link href={"/"} className="cursor-not-allowed">
              <div className="flex items-center h-[56px] ">
                <div className="w-[5px]  h-[56px] mr-[16px]"></div>
                <AiOutlineQuestionCircle className="w-[24px] h-[24px] mr-[8px]" />
                <div>Help & Support</div>
              </div>
            </Link>
            <div
              className="flex items-center h-[56px] hover:bg-[#f0efef] cursor-pointer"
              onClick={(e) => {
                console.log("clicked");
                e.stopPropagation();
                if (!user.email) {
                  dispatch(openAuthModal());
                  return;
                }
              }}
            >
              <div className="w-[5px]  h-[56px] mr-[16px]"></div>
              <FiLogIn className="w-[24px] h-[24px] mr-[8px]" />
              <div>Login</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
