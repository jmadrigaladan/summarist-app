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
          {/* statistics sub section */}
          {/* statistics__wrapper */}
          <div className="flex gap-[32px] md:gap-[80px] mb-[32px] md:mb-[96px] flex-col md:flex-row ">
            {/* statistics__content--header */}
            <div className="w-full flex flex-col justify-center">
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Enhance your knowledge
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Achieve greater success
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Improve your health
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Develop better parenting skills
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Increase happiness
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Be the best version of yourself!
              </div>
            </div>

            {/* statistics__content--details */}
            <div className="w-full flex flex-col justify-center gap-[24px] bg-[#f1f6f4] py-[40px] px-[24px]">
              {/* statistics__data */}
              <div className="flex gap-[16px]">
                {/* statistics__data--number */}
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">
                  93%
                </div>
                {/* statistics__data--title  */}
                <div className="text-[16px] md:text-[20px] font-light text-[#394547] ">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              {/* statistics__data */}
              <div className="flex gap-[16px]">
                {/* statistics__data--number */}
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">
                  96%
                </div>
                {/* statistics__data--title  */}
                <div className="text-[16px] md:text-[20px] font-light text-[#394547] ">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              {/* statistics__data */}
              <div className="flex gap-[16px]">
                {/* statistics__data--number */}
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">
                  90%
                </div>
                {/* statistics__data--title  */}
                <div className="text-[16px] md:text-[20px] font-light text-[#394547] ">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>

          {/* statistics__wrapper */}
          <div className="flex gap-[32px] md:gap-[80px] mb-[0px] md:mb-[96px] flex-col md:flex-row ">
            {/* .statistics__content--details statistics__content--details-second */}
            <div className="w-full flex flex-col justify-center gap-[24px] bg-[#f1f6f4] py-[40px] px-[24px] statistics__content--details-second">
              {/* statistics__data */}
              <div className="flex gap-[16px]">
                {/* statistics__data--number */}
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">
                  91%
                </div>
                {/* statistics__data--title  */}
                <div className="text-[16px] md:text-[20px] font-light text-[#394547] ">
                  of Summarist members <b>report feeling more productive</b>
                  {""} after incorporating the service into their daily routine.
                </div>
              </div>
              {/* statistics__data */}
              <div className="flex gap-[16px]">
                {/* statistics__data--number */}
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">
                  94%
                </div>
                {/* statistics__data--title  */}
                <div className="text-[16px] md:text-[20px] font-light text-[#394547] ">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              {/* statistics__data */}
              <div className="flex gap-[16px]">
                {/* statistics__data--number */}
                <div className="text-[#0365f2] text-[20px] font-semibold mt-[4px]">
                  88%
                </div>
                {/* statistics__data--title  */}
                <div className="text-[16px] md:text-[20px] font-light text-[#394547] ">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            {/* statistics__content--header statistics__content--header-second  */}
            <div className="w-full flex flex-col justify-center items-start md:items-end">
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Expand your learning
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Accomplish your goals
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Strengthen your vitality
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Become a better caregiver
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Improve your mood
              </div>
              {/*  statistics__heading */}
              <div className="text-[24px] md:text-[32px] font-medium text-[#6b757b] mb-[16px]">
                Maximize your abilities
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
