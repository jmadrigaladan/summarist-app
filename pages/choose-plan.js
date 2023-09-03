import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from "react";
export default function ChoosePlan() {
  const [accordionOneClicked, setAccordionOneClicked] = useState(false);
  function handleAccordionOne() {
    setAccordionOneClicked(!accordionOneClicked);
  }

  return (
    <>
      {/* wrapper wrapper__full */}
      <div className="ml-0 w-full">
        {/* sidebar overlay */}
        {/* plan */}
        <div className="w-full">
          {/* plan__header--wrapper */}
          <div className="text-center w-full pt-[48px] mb-[24px]top-0 left-0 z-[-1] h-full bg-[#032b41] rounded-b-[256px]">
            <div className="before:absolute before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full "></div>
            {/* plan__header */}
            <div className="max-w-[1000px] mx-auto px-[24px] text-white">
              {/* plan__title */}
              <div className="text-[48px] font-bold mb-[40px]">
                Get unlimited access to many amazing books to read
              </div>
              {/* plan sub title */}
              <div className="text-[20px] mb-[32px]">
                Turn ordinary moments into amazing learning opportunities
              </div>
              {/* plan__img mask */}
              <figure className="flex justify-center max-w-[340px] mx-auto rounded-t-[180px] overflow-hidden">
                <img src={"/assets/pricing-top.png"} alt="" />
              </figure>
            </div>
          </div>
          {/* row */}
          <div className="max-w-[1070px] mx-auto w-full px-[24px]">
            {/* container */}
            <div className="py-[40px] w-full">
              {/* plan__features--wrapper */}
              <div className="grid grid-cols-3 justify-items-center text-center gap-[24px] max-w-[800px] mx-auto mb-[56px] mt-0 ">
                {/* plan features */}
                <div>
                  <figure className="flex justify-center">
                    {/* svg */}
                    <IoDocumentTextSharp className="fill-[#032b41] w-[60px] h-[60px] mb-[12px]" />
                  </figure>
                  {/* plan features text */}
                  <div className="">
                    <b>Key ideas in few min</b> with many books to read
                  </div>
                </div>
                {/* plan features */}
                <div>
                  <figure className="flex justify-center">
                    {/* svg */}
                    <RiPlantFill className="fill-[#032b41] w-[60px] h-[60px] mb-[12px]" />
                  </figure>
                  {/* plan features text */}
                  <div className="">
                    <b>3 million people </b>
                    growing with Summarist everyday
                  </div>
                </div>
                {/* plan features */}
                <div>
                  <figure className="flex justify-center">
                    {/* svg */}
                    <FaHandshake className="fill-[#032b41] w-[60px] h-[60px] mb-[12px]" />
                  </figure>
                  {/* plan features text */}
                  <div className="">
                    <b>Precise recommendations </b>
                    collections curated by experts
                  </div>
                </div>
              </div>

              {/* section title */}
              <div className="text-center text-[32px] text-[#032b41] font-bold mb-[32px]">
                Choose the plan that fits you
              </div>
              {/* plan__card  */}
              <div className="flex gap-[24px] p-[24px] bg-[#f1f6f4] rounded-[4px] cursor-pointer max-w-[680px] mx-auto">
                {/* plan card circle */}
                <div className="relative w-[24px] h-[24px] rounded-full border-2 border-solid border-black flex items-center justify-center">
                  <div className="absolute w-[6px] h-[6px] bg-black rounded-full"></div>
                </div>
                {/* plan__card--content */}
                <div>
                  {/* plan__card--title */}
                  <div className="text-[18px] font-semibold text-[#032b41] mb-[8px]">
                    Premium Plus Yearly
                  </div>
                  {/* plan__card--price */}
                  <div className="text-[24px] font-bold text-[#032b41] mb-[8px]">
                    $99.99/year
                  </div>
                  {/* plan__card--text */}
                  <div className="text-[#6b757b] text-[14px]">
                    7-day free trial included
                  </div>
                </div>
              </div>

              {/* or seperator */}
              <div className="flex items-center gap-[8px] max-w-[240px] mx-auto my-[24px]">
                <hr className="w-[40%] h-[8px] text-[#bac8ce]" />
                or
                <hr className="w-[40%] h-[8px] text-[#bac8ce]" />
              </div>

              {/* plan__card  */}
              <div className="flex gap-[24px] p-[24px] bg-[#f1f6f4] rounded-[4px] cursor-pointer max-w-[680px] mx-auto">
                {/* plan card circle */}
                <div className="relative w-[24px] h-[24px] rounded-full border-2 border-solid border-black flex items-center justify-center">
                  <div className="absolute w-[6px] h-[6px] bg-black rounded-full"></div>
                </div>
                {/* plan__card--content */}
                <div>
                  {/* plan__card--title */}
                  <div className="text-[18px] font-semibold text-[#032b41] mb-[8px]">
                    Premium Monthly
                  </div>
                  {/* plan__card--price */}
                  <div className="text-[24px] font-bold text-[#032b41] mb-[8px]">
                    $9.99/month
                  </div>
                  {/* plan__card--text */}
                  <div className="text-[#6b757b] text-[14px]">
                    No trial included
                  </div>
                </div>
              </div>

              {/* plan__card--cta */}
              <div className="bg-white sticky bottom-0 z-[1] py-[32px] flex flex-col items-center gap-[16px]">
                <button className="w-[300px] text-[#032b41] bg-[#2bd97c] h-[40px] rounded-[4px] text-[16px] flex items-center justify-center min-w-[180px]">
                  Start your free 7-day trial
                </button>
                {/* plan_disclaimer */}
                <div className="text-[12px] text-[#6b757b] text-center">
                  Cancel your trial at any time before it ends, and you won’t be
                  charged.
                </div>
              </div>
              {/* faq__wrapper */}
              <div className="">
                {/* accordion card */}
                <div className="border-b-[1px] border-solid overflow-hidden border-[#ddd]">
                  {/* accordion header */}
                  <div
                    className="flex flex-col  cursor-pointer py-[24px] gap-[8px]"
                    onClick={handleAccordionOne}
                  >
                    <div className="flex justify-between items-center ">
                      {/*accordion title */}
                      <div className="font-medium text-[24px] mb-0 text-[#032b41]">
                        How does the free 7-day trial work?
                      </div>
                      {/* SVG arrow */}
                      <SlArrowDown
                        className={`w-[24px] h-[24px] transition-transform duration-500 ${
                          accordionOneClicked ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`text-[#394547] transition-[height] ease-in duration-500 ${
                        accordionOneClicked ? "inline" : "hidden"
                      } `}
                    >
                      Begin your complimentary 7-day trial with a Summarist
                      annual membership. You are under no obligation to continue
                      your subscription, and you will only be billed when the
                      trial period expires. With Premium access, you can learn
                      at your own pace and as frequently as you desire, and you
                      may terminate your subscription prior to the conclusion of
                      the 7-day free trial.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
