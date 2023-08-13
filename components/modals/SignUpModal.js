import {
  closeLogInModal,
  closeSignUpModal,
  openSignUpModal,
  closeLogInOpenSignUpModal,
} from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpModal() {
  const isSignUpOpen = useSelector((state) => state.modals.signupModalOpen);
  const isLogInOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="flex items-center justify-center w-full bg-[#f1f6f4] h-[40px] text-[#116be9] text-[14px] font-light cursor-pointer"
        onClick={() => {
          dispatch(closeLogInOpenSignUpModal());
        }}
      >
        Don't have an account?
      </div>
      <Modal
        open={isSignUpOpen}
        onClose={() => dispatch(closeSignUpModal())}
        disableAutoFocus={true}
        className="flex justify-center items-center outline-none "
      >
        <div className="bg-white w-[400px]  rounded-lg flex flex-col justify-center relative">
          <CgClose
            className="w-[30px] h-[30px] absolute top-[16px] right-[16px] cursor-pointer hover:opacity-50"
            onClick={() => dispatch(closeSignUpModal())}
          />
          <div className="w-full flex flex-col items-center pt-[48px] px-[32px] pb-[24px]">
            <h1 className="text-center text-[20px] font-bold mb-[24px] text-[#032b41] ">
              Sign up to Summarist
            </h1>

            <div className="flex justify-center w-full">
              <button className="flex items-center bg-[#4285f4] w-full h-[40px] min-w-[180px] rounded-[4px] hover:opacity-70">
                <figure className="pl-[4px]">
                  <img
                    src="/assets/google.png"
                    alt=""
                    className="w-[36px] h-[36px] bg-white mr-[60px] rounded-[4px] "
                  />
                </figure>
                <div className="text-white">Sign up with Google</div>
              </button>
            </div>
            <div className="my-[16px] flex items-center justify-between w-full">
              <hr className="w-[40%] h-[8px] text-[#bac8ce]" />
              or
              <hr className="w-[40%] h-[8px] text-[#bac8ce]" />
            </div>

            <div className="w-full ">
              <input
                className="w-full h-[40px] rounded-md bg-transparent border-[2px] border-[#bac8ce] p-4 focus:outline-none focus:border-[#2bd97c]"
                placeholder="Email Address"
                type="email"
                onChange={() => {}}
              />
              <input
                className="w-full h-[40px] mt-[16px] rounded-md bg-transparent border-[2px] border-[#bac8ce] p-4 focus:outline-none focus:border-[#2bd97c]"
                placeholder="Password"
                type="password"
                onChange={() => {}}
              />
            </div>

            <button className="bg-[#2bd97c] w-full rounded-md h-[40px] mt-[16px] hover:opacity-70">
              SignUp
            </button>

            <div className="w-full text-center text-[#116be9] text-[14px] font-light mt-[24px] cursor-pointer">
              Forgot your password?
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
