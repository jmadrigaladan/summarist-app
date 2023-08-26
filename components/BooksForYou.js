import Link from "next/link";

import { AiFillPlayCircle } from "react-icons/ai";
export default function BooksForYou({ selectedBooks, recommendedBooks }) {
  return (
    <>
      <div className="w-full">
        {/* wrapper */}
        <div className="ml-[200px] w-[calc(100%-200px)]">
          {/* row */}
          <div className="max-w-[1070px] w-full mx-auto px-[24px]">
            {/* Container */}
            <div className="w-full py-[40px]">
              {/* for you wrapper */}
              <div>
                {/* for you title */}
                <div className="text-[22px] font-bold text-[#032b41] mb-[16px]">
                  Selected just for you
                </div>
                {/* Book Link */}
                <Link
                  href={"/"}
                  className="flex justify-between w-[675px] bg-[#fbefd6] rounded-[4px] p-[24px] mb-[24px] gap-[24px]"
                >
                  {/* selected book sub title */}
                  <div className="w-[40%] text-[16px] text-[]">
                    {selectedBooks.subTitle}
                  </div>
                  {/* selected book line */}
                  <div className="w-[1px] bg-[#bac8ce]"></div>
                  {/* selected book content */}
                  <div className="flex gap-[16px] w-[60%]">
                    <figure className="h-[140px] w-[140px] min-w-[140px]">
                      <img src={selectedBooks.imageLink} alt="Book Image" />
                    </figure>
                    {/* selected book__text */}
                    <div>
                      {/* selected book title */}
                      <div className="text-[16px] font-semibold text-[#032b41] mb-[8px]">
                        {selectedBooks.title}
                      </div>
                      {/* selected book__author */}
                      <div className="text-[14px] text-[#394547] mb-[16px]">
                        {selectedBooks.author}
                      </div>
                      {/* selected book duration */}
                      <div>
                        <AiFillPlayCircle className="w-[48px] h-[48px]" />
                        {selectedBooks.d}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="text-[22px] font-bold text-[#032b41] mb-[16px]">
                  Recommended For You
                </div>
                <div className="font-light mb-[16px]">
                  We think you'll like these
                </div>
                {/* for you recommended books */}
                <div className="flex overflow-x-auto snap-x gap-[16px] mb-[16px]">
                  {recommendedBooks.map((book) => (
                    <RecommendedBook
                      bookTitle={book?.title}
                      bookImg={book?.imageLink}
                      booksubTitle={book?.subTitle}
                      author={book?.author}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function RecommendedBook({ bookTitle, bookImg, booksubTitle, author }) {
  console.log("hi");
  return (
    <>
      <Link href={""} className="max-w-[200px] pt-[32px] px-[12px] pb-[12px]">
        <figure className="w-[172px] h-[172px]">
          <img className="w-full h-full" src={bookImg} alt="" />
        </figure>
        {/* reccommened book title */}
        <div className="text-[16px] font-bold text-[#032b41] mb-[8px]">
          {bookTitle}
        </div>
        {/* recommended book author */}
        <div className="text-[14px] font-light text-[#6b757b] mb-[8px]">
          {author}
        </div>
        {/* recommended book sub title */}
        <div className="text-[14px] text-[#394547] mb-[8px]">
          {booksubTitle}
        </div>
        {/* recommened book details wrapper */}
        <div>
          {/* recommended book details */}
          <div></div>
          {/* recommended book details */}
          <div></div>
        </div>
      </Link>
    </>
  );
}
