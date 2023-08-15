import { openAuthModal } from "@/redux/modalSlice";
import { useDispatch } from "react-redux";

export default function Hero() {
  const dispatch = useDispatch();
  return (
    <>
      {/* container */}
      <div className="py-[40px] w-full">
        {/* row */}
        <div className="max-w-[1070px] w-full mx-auto px-[24px]">
          {/* landing__wrapper */}
          <div className="flex">
            {/* lanfing__content */}
            <div
              className="w-full mx-auto flex flex-col 
            items-center text-center md:items-start md:text-start max-w-[540px]
            "
            >
              {/* landing__content__title */}
              <div className="text-[#032b41] md:text-[40px] font-bold mb-[24px] text-[24px] w-full  ">
                Gain more knowledge
                <br className="hidden md:inline" /> in less time
              </div>
              {/* landing__content__subtitle */}
              <div className="text-[#032b41] text-[20px] font-light mb-[24px] leading-normal w-full ">
                Great summaries for busy people,
                <br className="hidden md:inline" />
                individuals who barely have time to read,
                <br className="hidden md:inline" />
                and even people who don’t like to read.
              </div>
              <button
                className="btn home__cta--btn"
                onClick={() => dispatch(openAuthModal())}
              >
                Login
              </button>
            </div>
            {/* landing__image--mask */}
            <figure className="w-full md:flex justify-end hidden ">
              <img
                className="w-full h-full max-w-[400px]"
                src={"/assets/landing.png"}
                alt="landing"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
