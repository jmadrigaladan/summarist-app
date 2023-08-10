import { BsStarFill } from "react-icons/bs";
export default function Reviews() {
  return (
    <>
      {/* row */}
      <div className="max-w-[1070px] w-full mx-auto px-[24px]">
        {/* container */}
        <div className="py-[40px] w-full">
          {/* section__title */}
          <div className="text-[24px] md:text-[32px] text-[#032b41] text-center mb-[32px] font-bold ">
            What our members say
          </div>
          {/* reviews__wrapper */}
          <div class="max-w-[600px] mx-auto">
            {/* review */}
            <div class="bg-[#fff3d7] p-[16px] mb-[32px] rounded-[4px] font-light ">
              {/* review__header */}
              <div class="text-[#032b41] flex gap-[8px] mb-[8px]">
                {/* review__name */}
                <div class="review__name">Hanna M.</div>
                {/* review__stars */}
                <div class="flex">
                  {/* review__stars svg */}
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                </div>
              </div>
              {/*review__body */}
              <div class="text-[#394547] tracking-[.3px] leading-[1.4] text-[14px] ">
                This app has been a <b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>

            {/* review */}
            <div class="bg-[#fff3d7] p-[16px] mb-[32px] rounded-[4px] font-light ">
              {/* review__header */}
              <div class="text-[#032b41] flex gap-[8px] mb-[8px]">
                <div class="review__name">David B.</div>
                {/* review__stars */}
                <div class="flex">
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                </div>
              </div>
              {/*review__body */}
              <div class="text-[#394547] tracking-[.3px] leading-[1.4] text-[14px] ">
                I love this app! It provides
                <b>concise and accurate summaries</b> of books in a way that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>

            {/* review */}
            <div class="bg-[#fff3d7] p-[16px] mb-[32px] rounded-[4px] font-light ">
              {/* review__header */}
              <div class="text-[#032b41] flex gap-[8px] mb-[8px]">
                <div class="review__name">Nathan S.</div>
                {/* review__stars */}
                <div class="flex">
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                </div>
              </div>
              {/*review__body */}
              <div class="text-[#394547] tracking-[.3px] leading-[1.4] text-[14px] ">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>

            {/* review */}
            <div class="bg-[#fff3d7] p-[16px] mb-[32px] rounded-[4px] font-light ">
              {/* review__header */}
              <div class="text-[#032b41] flex gap-[8px] mb-[8px]">
                <div class="review__name">Ryan R.</div>
                {/* review__stars */}
                <div class="flex">
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                  <BsStarFill className="w-[16px] h-[16px] fill-[#0564f1]" />
                </div>
              </div>
              {/*review__body */}
              <div class="text-[#394547] tracking-[.3px] leading-[1.4] text-[14px] ">
                If you're a busy person who
                <b>loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          {/* reviews__btn--wrapper */}
          <div class="flex justify-center">
            <button class="btn home__cta--btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
