import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";

export default function Numbers() {
  return (
    <>
      {/* container */}
      <div className="py-[40px] w-full">
        {/* row */}
        <div className="max-w-[1070px] w-full mx-auto px-[24px]">
          {/* section__title */}
          <div className="text-[24px] md:text-[32px] text-[#032b41] text-center mb-[32px] font-bold ">
            Start growing with Summarist now
          </div>
          {/* numbers__wrapper */}
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3 md:gap-[40px]">
            {/* numbers */}
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-[12px]">
              {/* numbers__icon */}
              <div className="flex items-center h-[60px] gap-[4px]">
                <BiCrown className="w-[48px] h-[48px] text-[#0365f2]" />
              </div>
              {/* numbers__title */}
              <div className="text-[32px] md:text-[40px] text-[#032b41] font-semibold mb-[16px]">
                3 Million
              </div>
              {/* numbers__sub--title */}
              <div className="text-[#394547] font-light text-[14px]">
                Downloads on all platforms
              </div>
            </div>
            {/* numbers */}
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-[12px]">
              {/* numbers__icon */}
              <div className="flex items-center h-[60px] gap-[4px] ">
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]" />
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]" />
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]" />
                <BsStarFill className="w-[20px] h-[20px] text-[#0365f2]" />
                <BsStarHalf className="w-[20px] h-[20px] text-[#0365f2]" />
              </div>
              {/* numbers__title */}
              <div className="text-[32px] md:text-[40px] text-[#032b41] font-semibold mb-[16px]">
                4.5 Stars
              </div>
              {/* numbers__sub--title */}
              <div className="text-[#394547] font-light text-[14px]">
                Average ratings on iOS and Google Play
              </div>
            </div>
            {/* numbers */}
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-[24px] pb-[40px] rounded-[12px]">
              {/* numbers__icon */}
              <div className="flex items-center h-[60px] gap-[4px]">
                <RiLeafLine className="w-[48px] h-[48px] text-[#0365f2]" />
              </div>
              {/* numbers__title */}
              <div className="text-[32px] md:text-[40px] text-[#032b41] font-semibold mb-[16px]">
                97%
              </div>
              {/* numbers__sub--title */}
              <div className="text-[#394547] font-light text-[14px]">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
