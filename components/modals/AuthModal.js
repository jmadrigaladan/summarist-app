import { openAuthModal, closeAuthModal } from "@/redux/modalSlice";
import { useRouter } from "next/router";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidUser } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import CircularProgress from "@mui/material/CircularProgress";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { setUser } from "@/redux/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function AuthModal() {
  const isOpen = useSelector((state) => state.modals.authModalOpen);
  const dispatch = useDispatch();
  const [registeredAccount, setRegisteredAccount] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [pageLoading, setPageLoading] = useState(false);

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setTimeout(() => {
      setPageLoading(true);
      router.push("/foryou");
    }, 2000);
  }

  async function handleSignIn() {
    setPageLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
    setTimeout(() => {
      // setPageLoading(true);
      router.push("/foryou");
    }, 2000);
  }

  async function handleGuestSignIn() {
    setPageLoading(true);
    await signInWithEmailAndPassword(auth, "guest@gmail.com", "User12345");
    setTimeout(() => {
      // setPageLoading(true);
      router.push("/foryou");
    }, 2000);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      console.log(currentUser);
      dispatch(
        setUser({
          email: currentUser.email,
          uid: currentUser.uid,
        })
      );
      // router.push("/foryou");
    });

    return unsubscribe;
  }, []);

  function forYouPage() {
    router.push("/foryou");
    setPageLoading(true);
  }
  

  return (
    <>
      <li
        className="text-[#032b41] hover:text-[#2bd97c] cursor-pointer transition duration-100"
        onClick={() => dispatch(openAuthModal())}
      >
        Login
      </li>
      {}
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeAuthModal())}
        disableAutoFocus={true}
        className="flex justify-center items-center outline-none "
      >
        {registeredAccount ? (
          <div className="bg-white w-[400px]  rounded-lg flex flex-col justify-center relative">
            <CgClose
              className="w-[30px] h-[30px] absolute top-[16px] right-[16px] cursor-pointer hover:opacity-50"
              onClick={() => {
                setRegisteredAccount(!registeredAccount);
                dispatch(closeAuthModal());
              }}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full h-[40px] mt-[16px] rounded-md bg-transparent border-[2px] border-[#bac8ce] p-4 focus:outline-none focus:border-[#2bd97c]"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="bg-[#2bd97c] w-full rounded-md h-[40px] mt-[16px] hover:opacity-70"
                onClick={() => {
                  handleSignUp;
                }}
              >
                SignUp
              </button>

              <div className="w-full text-center text-[#116be9] text-[14px] font-light mt-[24px] cursor-pointer">
                Forgot your password?
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-white w-[400px]  rounded-lg flex flex-col justify-center relative">
              <CgClose
                className="w-[30px] h-[30px] absolute top-[16px] right-[16px] cursor-pointer hover:opacity-50"
                onClick={() => dispatch(closeAuthModal())}
              />

              <div className="w-full flex flex-col items-center pt-[48px] px-[32px] pb-[24px]">
                <h1 className="text-center text-[20px] font-bold mb-[24px] text-[#032b41] ">
                  Log in to Summarist
                </h1>
                <div className="flex justify-center w-full">
                  <button
                    className="flex items-center  bg-[#3a579d] w-full h-[40px] min-w-[180px] rounded-[4px] hover:opacity-70"
                    onClick={() => {
                      handleGuestSignIn;
                    }}
                  >
                    {pageLoading ? (
                      <>
                        <div className="w-full flex justify-center">
                          <CircularProgress
                            size="2rem"
                            style={{ color: "white" }}
                            className="flex justify-center"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <BiSolidUser className="w-[40px] h-[40px] py-[4px] mr-[64px] fill-white" />
                        <div className="text-white text-center">
                          Login as a Guest
                        </div>
                      </>
                    )}
                  </button>
                </div>
                <div className="my-[16px] flex items-center justify-between w-full">
                  <hr className="w-[40%] h-[8px] text-[#bac8ce]" />
                  or
                  <hr className="w-[40%] h-[8px] text-[#bac8ce]" />
                </div>
                <div className="flex justify-center w-full">
                  <button className="flex items-center bg-[#4285f4] w-full h-[40px] min-w-[180px] rounded-[4px] hover:opacity-70">
                    <figure className="pl-[4px]">
                      <img
                        src="/assets/google.png"
                        alt=""
                        className="w-[36px] h-[36px] bg-white mr-[60px] rounded-[4px] "
                      />
                    </figure>
                    <div className="text-white">Login with Google</div>
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

                <button
                  className="bg-[#2bd97c] w-full rounded-md h-[40px] mt-[16px] hover:opacity-70 flex items-center justify-center"
                  onClick={() => {
                    handleSignIn;
                  }}
                >
                  {pageLoading ? (
                    <>
                      <CircularProgress
                        size="2rem"
                        style={{ color: "white" }}
                        className
                      />
                    </>
                  ) : (
                    "LogIn"
                  )}
                </button>

                <div className="w-full text-center text-[#116be9] text-[14px] font-light mt-[24px] cursor-pointer">
                  Forgot your password?
                </div>
              </div>
              <div
                className="flex items-center justify-center w-full bg-[#f1f6f4] h-[40px] text-[#116be9] text-[14px] font-light cursor-pointer"
                onClick={() => {
                  setRegisteredAccount(!registeredAccount);
                }}
              >
                Don't have an account?
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
