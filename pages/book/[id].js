import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineMicrophone } from "react-icons/hi";

export async function getServerSideProps(context) {
  const bookRes = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${context.query.id}`
  );
  const bookData = await bookRes.json();
  return { props: { bookData } };
}

export default function BookPage({ bookData }) {
  console.log(bookData);
  return (
    <div className="w-full">
      <Sidebar />
      <SearchBar />
      <div className="ml-[200px] w-[calc(100%-200px)]">
        {/* row */}
        <div className="max-w-[1070px] w-full mx-auto px-[24px]">
          {/* Container */}
          <div className="w-full py-[40px]">
            {/* inner__wrapper */}
            <div className="flex gap-[16px]">
              {/* inner__book */}
              <div className="w-full">
                {/* inner__book title */}
                <div className="text-[#032b41] mb-[16px] font-bold text-[32px]">
                  {bookData?.title}
                </div>
                {/* inner__book author */}
                <div className="text-[16px] text-[#032b41] font-bold mb-[16px]">
                  {bookData?.author}
                </div>
                {/* inner__book subtitle */}
                <div className="font-light text-[#032b41] text-[20px] mb-[16px]">
                  {bookData?.subTitle}
                </div>
                {/* innerbook wraper */}
                <div className="border-solid border-y p-[16px]">
                  {/* innerbook description wrapper */}
                  <div className="flex flex-wrap max-w-[400px] gap-y-[12px]">
                    {/* innerbook description */}
                    <div className="flex items-center w-[50%] text-[#032b41] text-[14px] font-semibold">
                      <AiOutlineStar className="w-[24px] h-[24px] mr-[4px]" />
                      <div className="mr-[4px]">{bookData.averageRating}</div>(
                      {bookData.totalRating} ratings)
                    </div>
                    <div className="flex items-center w-[50%] text-[#032b41] text-[14px] font-semibold">
                      <AiOutlineStar className="w-[24px] h-[24px] mr-[4px]" />
                      <div className="mr-[4px]">{bookData.averageRating}</div>(
                      {bookData.totalRating} ratings)
                    </div>
                    <div className="flex items-center w-[50%] text-[#032b41] text-[14px] font-semibold">
                      <HiOutlineMicrophone className="w-[24px] h-[24px] mr-[4px]" />
                       <div className="mr-[4px]">{bookData.type}</div>
                    </div>
                    <div className="flex items-center w-[50%] text-[#032b41] text-[14px] font-semibold">
                      <AiOutlineStar className="w-[24px] h-[24px] mr-[4px]" />
                      <div className="mr-[4px]">{bookData.averageRating}</div>(
                      {bookData.totalRating} ratings)
                    </div>
                  </div>
                </div>
              </div>
              {/* inner__book img__wrapper */}
              <div className="">
                <figure className="h-[300px] w-[300px] min-w-[300px]">
                  <img src={bookData?.imageLink} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
