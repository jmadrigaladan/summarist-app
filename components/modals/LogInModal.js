import { closeLogInModal, openLogInModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function LogInModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <li
        className="text-[#032b41] hover:text-[#2bd97c] cursor-pointer transition duration-100"
        onClick={() => dispatch(openLogInModal())}
      >
        Login
      </li>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center"
      >
        <div className="bg-white w-[400px] h-[300px] rounded-lg flex justify-center">
          <div className="w-full justify-center">
            <h1 className="text-center pt-[48px] px-[32px] pb-[24px]">
              Log In to Summarist
            </h1>
          </div>
        </div>
      </Modal>
    </>
  );
}
