export default function Hero() {
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
              className="w-full max-w-[540px] mx-auto flex flex-col 
            items-center text-center 
            "
            >
              {/* landing__content__title */}
              <div className="text-[#032b41] text-[40px] font-bold mb-[24px] md:text-[24px]  ">
                Gain more knowledge <br className="md:none" />
                in less time
              </div>
              {/* landing__content__subtitle */}
              <div className="text-[#032b41] text-[20px] font-light mb-[24px] leading-6  ">
                Great summaries for busy people,
                <br className="md:none" />
                individuals who barely have time to read,
                <br className="md:none" />
                and even people who don’t like to read.
              </div>
              <button className="btn home__cta--btn">Login</button>
            </div>
            {/* landing__image--mask */}
            <figure className="w-full flex justify-end md:hidden">
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
