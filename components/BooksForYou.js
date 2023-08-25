import Link from "next/link";

export default function BooksForYou({ selectedBooks }) {
  console.log(selectedBooks);

  return (
    <>
      <div className="w-full">
        {/* wrapper */}
        <div className="ml-[200px] width-[calc(100%-200px)]">
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
                  className="flex justify-between w-[calc((100% / 3) * 2)] bg-[#fbefd6] rounded-[4px] p-[24px] mb-[24px] gap-[24px]"
                >
                  {/* selected book sub title */}
                  <div className="w-[40%]"></div>
                  {/* selected book line */}
                  <div className="w-[2px] bg-[#bac8ce]"></div>
                  {/* selected book content */}
                  <div className="flex gap-[16px] w-[60%]"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
