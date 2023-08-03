export default function Hero() {
  return (
    <section>
      <div className="py-[40px] w-full">
        <div className="max-w-[1070px] w-full mx-auto px-[24px]">
          <div className="flex">
            <div className="w-full">
              {/* landing__content__title */}
              <div className="text-[#032b41] text-[40px] font-bold mb-[24px] max-w-[768px]:flex max-w-[768px]:flex-col max-w-[768px]:items-center max-w-[768px]:text-center max-w-[768px]:max-w-[540px] max-w-[768px]:mx-auto ">
                Gain more knowledge <br className="max-w-[768px]:none" />
                in less time
              </div>
              {/* landing__content__subtitle */}
              <div className="text-[#032b41] text-[20px] font-light mb-[24px] leading-6  ">
                Great summaries for busy people,
                <br className="max-w-[768px]:none" />
                individuals who barely have time to read,
                <br className="max-w-[768px]:none" />
                and even people who don’t like to read.
              </div>
              <button className="btn home__cta--btn">Login</button>
            </div>
            {/* landing__image--mask */}
            <figure className="w-full flex justify-end">
              <img
                className="w-full h-full max-w-[400px]"
                src={"/assets/landing.png"}
                alt="landing"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
