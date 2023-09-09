import Sidebar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import { auth } from "@/firebase";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { openAuthModal } from "@/redux/modalSlice";
import AuthModal from "@/components/modals/AuthModal";

export default function Settings() {
  const email = auth?.currentUser?.email;
  const user = useSelector((state) => state.user);
  const [modalsNeedToOpen, setModalNeedsToOpen] = useState(false);
  const dispatch = useDispatch();

  function handleLogIn() {
    dispatch(openAuthModal());
    setModalNeedsToOpen(true);
  }
  console.log(auth?.currentUser);
  console.log(email);
  return (
    <>
      <div className="w-full ">
        <Sidebar />
        <SearchBar />
        {/* wrapper */}
        <div className="md:ml-[200px] md:w-[calc(100%-200px)]">
          {/* Container */}
          <div className="w-full py-[40px]">
            {/* row */}
            <div className="max-w-[1070px] w-full mx-auto px-[24px]">
              {/* section title and page title */}
              <div className="text-left border-b-[1px] border-solid border-[#e1e7ea] pb-[16px] text-[32px] text-[#032b41] mb-[32px] font-bold">
                Settings
              </div>
              {modalsNeedToOpen ? <AuthModal /> : <></>}
              {user.email ? (
                <>
                  <div className="flex flex-col items-start gap-[8px] mb-[32px] border-b-[1px] border-solid border-[#e1e7ea] pb-[24px]">
                    {/* settings sub title */}
                    <div className="text-[18px] font-bold text-[#032b41]">
                      Your Subscription Plan
                    </div>
                    {/* settings text */}
                    <div className="text-[#032b41]">Basic</div>
                    <Link href={"/choose-plan"}>
                      <button className="bg-[#2bd97c] text-[#032b41] h-[40px] rounded-[4px] text-[16px] flex items-center justify-center min-w-[180px]  hover:opacity-70">
                        Upgrade to Premium
                      </button>
                    </Link>
                  </div>
                  {/* setting content */}
                  <div className="flex flex-col items-start gap-[8px]">
                    <div className="text-[18px] font-bold text-[#032b41]">
                      Email
                    </div>
                    <div className="text-[#032b41]">
                      {auth?.currentUser?.email}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* settings login wrapper */}
                  <div className="max-w-[460px] flex flex-col items-center mx-auto">
                    <img src={"/assets/login.png"} alt="" />
                    {/* log in text */}
                    <div className="text-[24px] text-[#032b41] font-bold mb-[16px] text-center">
                      Log in to your account to see your details.
                    </div>
                    {/* button */}
                    <button
                      className="bg-[#2bd97c] text-[#032b41] h-[40px] rounded-[4px] text-[16px] flex items-center justify-center min-w-[180px] hover:opacity-70"
                      onClick={handleLogIn}
                    >
                      Login
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
