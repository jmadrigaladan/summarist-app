import { AiFillFileText, AiFillAudio, AiFillBulb } from "react-icons/ai";

export default function Features() {
  return (
    <>
      {/* container */}
      <div className="py-[40px] w-full">
        {/* row */}
        <div className="max-w-[1070px] w-full mx-auto px-[24px]">
          {/* section__title */}
          <div className="text-[24px] md:text-[32px] text-[#032b41] text-center mb-[32px] font-bold ">
            Understand books in few minutes
          </div>
          {/* features__wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-[96px]">
            {/* features */}
            <div className="flex flex-col items-center text-center">
              {/* features__icon */}
              <div className="flex justify-center mb-[8px] text-[#032b41]">
                {/*features__icon svg */}
                <AiFillFileText className="w-[48px] h-[48px] md:w-[60px] md:h-[60px]" />
              </div>
              {/* features__title */}
              <div className="text-[20px] md:text-[24px] text-[#032b41] mb-[16px] font-medium">
                Read or listen
              </div>
              {/* features__sub--title */}
              <div className="text-[14px] md:text-[18px] text-[#394547] font-light">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            {/* features */}
            <div className="flex flex-col items-center text-center">
              {/* features__icon */}
              <div className="flex justify-center mb-[8px] text-[#032b41]">
                {/*features__icon svg */}
                <AiFillBulb className="w-[48px] h-[48px] md:w-[60px] md:h-[60px]" />
              </div>
              {/* features__title */}
              <div className="text-[20px] md:text-[24px] text-[#032b41] mb-[16px] font-medium">
                Find your next read
              </div>
              {/* features__sub--title */}
              <div className="text-[14px] md:text-[18px] text-[#394547] font-light">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            {/* features */}
            <div className="flex flex-col items-center text-center">
              {/* features__icon */}
              <div className="flex justify-center mb-[8px] text-[#032b41]">
                <AiFillAudio className="w-[48px] h-[48px] md:w-[60px] md:h-[60px]" />
              </div>
              {/* features__title */}
              <div className="text-[20px] md:text-[24px] text-[#032b41] mb-[16px] font-medium">
                Briefcasts
              </div>
              {/* features__sub--title */}
              <div className="text-[14px] md:text-[18px] text-[#394547] font-light">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          {/* statisitics__wrapper */}
          <div className="flex gap-[80px] mb-96px">
            <div className="statistics__content--header">
              <div className="statistics__heading">Enhance your knowledge</div>
              <div className="statistics__heading">Achieve greater success</div>
              <div className="statistics__heading">Improve your health</div>
              <div className="statistics__heading">
                Develop better parenting skills
              </div>
              <div className="statistics__heading">Increase happiness</div>
              <div className="statistics__heading">
                Be the best version of yourself!
              </div>
            </div>
            <div className="statistics__content--details">
              <div className="statistics__data">
                <div className="statistics__data--number">93%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">96%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">90%</div>
                <div className="statistics__data--title">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics__wrapper">
          <div className="statistics__content--details statistics__content--details-second">
            <div className="statistics__data">
              <div className="statistics__data--number">91%</div>
              <div className="statistics__data--title">
                of Summarist members <b>report feeling more productive</b>
                {""} after incorporating the service into their daily routine.
              </div>
            </div>
            <div className="statistics__data">
              <div className="statistics__data--number">94%</div>
              <div className="statistics__data--title">
                of Summarist members have <b>noticed an improvement</b> in their
                overall comprehension and retention of information.
              </div>
            </div>
            <div className="statistics__data">
              <div className="statistics__data--number">88%</div>
              <div className="statistics__data--title">
                of Summarist members <b>feel more informed</b> about current
                events and industry trends since using the platform.
              </div>
            </div>
          </div>
          <div className="statistics__content--header statistics__content--header-second">
            <div className="statistics__heading">Expand your learning</div>
            <div className="statistics__heading">Accomplish your goals</div>
            <div className="statistics__heading">Strengthen your vitality</div>
            <div className="statistics__heading">Become a better caregiver</div>
            <div className="statistics__heading">Improve your mood</div>
            <div className="statistics__heading">Maximize your abilities</div>
          </div>
        </div>
      </div>
    </>
  );
}
