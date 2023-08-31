import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import AuthModal from "@/components/modals/AuthModal";
import { AiOutlineStar } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { BsBook, BsBookmark } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { HiOutlineLightBulb, HiOutlineMicrophone } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { openAuthModal } from "@/redux/modalSlice";

export async function getServerSideProps(context) {
  const bookRes = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${context.query.id}`
  );
  const bookData = await bookRes.json();
  return { props: { bookData } };
}

export default function BookPage({ bookData }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [modalsNeedToOpen, setModalNeedsToOpen] = useState(false);
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);

  const user = useSelector((state) => state.user);
  function handlePlayer() {
    if (!user.email) {
      dispatch(openAuthModal());
      setModalNeedsToOpen(true);
    } else {
      router.push(`/player/${bookData.id}`);
    }
  }

  useEffect(() => {
    setDuration(audioRef.current.duration);
  }, []);

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

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
                <div className="border-solid border-y p-[16px] mb-[24px]">
                  {/* innerbook description wrapper */}
                  <div className="flex flex-wrap max-w-[400px] gap-y-[12px]">
                    {/* innerbook description */}
                    <div className="flex items-center w-[50%] text-[#032b41] text-[14px] font-semibold">
                      <AiOutlineStar className="w-[24px] h-[24px] mr-[4px]" />
                      <div className="mr-[4px]">{bookData.averageRating}</div>(
                      {bookData.totalRating} ratings)
                    </div>
                    <div className="flex items-center w-[50%] text-[#032b41] text-[14px] font-semibold">
                      <FiClock className="w-[24px] h-[24px] mr-[4px]" />
                      <audio src={bookData?.audioLink} ref={audioRef} />
                      <div className="mr-[4px]">{formatTime(duration)}</div>
                    </div>
                    <div className="flex items-center w-[50%] text-[#032b41] text-[14px] font-semibold">
                      <HiOutlineMicrophone className="w-[24px] h-[24px] mr-[4px]" />
                      <div className="mr-[4px]">{bookData.type}</div>
                    </div>
                    <div className="flex items-center w-[50%] text-[#032b41] text-[14px] font-semibold">
                      <HiOutlineLightBulb className="w-[24px] h-[24px] mr-[4px]" />
                      <div className="mr-[4px]">
                        {bookData.keyIdeas} Key ideas
                      </div>
                    </div>
                  </div>
                </div>
                {/* inner book read btn wrapper */}
                <div className="flex gap-[16px] mb-[24px] text-white">
                  {modalsNeedToOpen ? <AuthModal /> : <></>}
                  <button
                    onClick={handlePlayer}
                    className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] rounded-[4px] cursor-pointer gap-[8px] hover:opacity-70"
                  >
                    <BsBook className="w-[24px] h-[24px]" />
                    <div className="text-[16px]">Read</div>
                  </button>
                  <button
                    onClick={handlePlayer}
                    className="flex items-center justify-center w-[144px] h-[48px] bg-[#032b41] rounded-[4px] cursor-pointer gap-[8px] hover:opacity-70"
                  >
                    <BiMicrophone className="w-[24px] h-[24px]" />
                    <div className="text-[16px]">Listen</div>
                  </button>
                </div>
                {/* inner book bookMark */}
                <div className="flex items-center gap-[8px] text-[#0365f2] font-medium cursor-pointer mb-[40px] text-[18px] hover:text-[#044298] font-semibold ">
                  <BsBookmark className="w-[20px] h-[20px]" />
                  <div>Add title to My Library</div>
                </div>
                {/* inner book secondary title */}
                <div className="text-[18px] mb-[16px] text-[#032b42] font-semibold">
                  What's it about?
                </div>
                {/* inner__book tags wrapper */}
                <div className="flex flex-wrap gap-[16px] mb-[16px]">
                  {/* inner book tag */}
                  <div className="bg-[#f1f6f4] text-[16px] px-[16px] h-[48px] flex items-center cursor-not-allowed text-[#032b41] font-semibold rounded-[4px]">
                    {bookData?.tags[0]}
                  </div>
                  <div className="bg-[#f1f6f4] text-[16px] px-[16px] h-[48px] flex items-center cursor-not-allowed text-[#032b41] font-semibold rounded-[4px]">
                    {bookData?.tags[1]}
                  </div>
                </div>

                {/* inner book description */}
                <div className="text-[#023b41] mb-[16px] leading-normal">
                  {bookData?.bookDescription}
                </div>
                {/* inner book secondary title */}
                <div className="text-[18px] mb-[16px] text-[#032b42] font-semibold">
                  About the author
                </div>
                {/* author description */}
                <div className="text-[#023b41] mb-[16px] leading-normal">
                  {bookData?.authorDescription}
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
