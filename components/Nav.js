import { useState } from "react";
import AuthModal from "./modals/AuthModal";
import { useDispatch } from "react-redux";
import { openAuthModal } from "@/redux/modalSlice";

export default function Nav() {
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  function checkAuth() {
    setIsModalOpen(true);
    dispatch(openAuthModal());
  }
  return (
    <nav className="h-[80px]">
      <div className="flex justify-between items-center max-w-[1070px] w-full h-full mx-auto px-[24px]">
        <figure className="max-w-[200px]">
          <img className="w-full h-full" src={"/assets/logo.png"} alt="logo" />
        </figure>
        <ul className="flex gap-[24px]">
          <li
            className="text-[#032b41] hover:text-[#2bd97c] cursor-pointer transition duration-100"
            onClick={checkAuth}
          >
            Login
          </li>
          <li className="text-[#032b41]  hidden xs:inline cursor-not-allowed">
            About
          </li>
          <li className="text-[#032b41] hidden xs:inline cursor-not-allowed">
            Contact
          </li>
          <li className="text-[#032b41]  hidden xs:inline cursor-not-allowed">
            Help
          </li>
          {ismodalOpen ? <AuthModal /> : <></>}
        </ul>
      </div>
    </nav>
  );
}
