import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { auth } from "@/firebase";
export default function BooksForYou({
  selectedBooks,
  recommendedBooks,
  suggestedBooks,
}) {
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState();
  const [premiumStatus, setPremiumStatus] = useState("");

  const onLoadedMetadata = () => {
    setDuration(audioRef.current?.duration);
  };

  const loadingArr = [0, 0, 0, 0, 0];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", onLoadedMetadata);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          onLoadedMetadata
        );
      }
    };
  }, []);

  useEffect(() => {
    setDuration(audioRef.current?.duration);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  const selectedFormat = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `${seconds}` : `${seconds}`;
      return `${formatMinutes} mins ${formatSeconds} secs`;
    }
    return "0 mins 0 secs";
  };

  async function getCustomClaimRole() {
    await auth.currentUser?.getIdToken(true);
    const decodedToken = await auth.currentUser?.getIdTokenResult();
    return decodedToken?.claims.stripeRole;
  }

  useEffect(() => {
    const checkPremium = async () => {
      const newPremiumStatus = await getCustomClaimRole();
      setPremiumStatus(newPremiumStatus);
    };
    checkPremium();
  }, [auth.currentUser?.uid]);

  return (
    <>
      <div className="w-full">
        {/* wrapper */}
        <div className="md:ml-[200px] md:w-[calc(100%-200px)]">
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
                {loading ? (
                  <>
                    <div className="h-[200px] bg-[#e4e4e4] w-[60%] mb-[24px] "></div>
                  </>
                ) : (
                  <>
                    <Link
                      href={`book/${selectedBooks.id}`}
                      className="w-full flex-col md:flex-row flex justify-between lg:w-[675px] bg-[#fbefd6] rounded-[4px] p-[24px] mb-[24px] gap-[24px]"
                    >
                      {/* selected book sub title */}
                      <div className="w-full text-[14px] md:w-[40%] md:text-[16px]">
                        {selectedBooks.subTitle}
                      </div>
                      {/* selected book line */}
                      <div className="hidden md:inline-block w-[1px] bg-[#bac8ce]"></div>
                      {/* selected book content */}
                      <div className="w-full flex gap-[16px] md:w-[60%]">
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
                          <div className="flex items-center  text-[14px] md:text-[16px]">
                            <AiFillPlayCircle className="w-[48px] h-[48px] mr-[4px] " />
                            <div>{selectedFormat(duration)}</div>
                            <audio
                              src={selectedBooks.audioLink}
                              ref={audioRef}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                )}
                <div className="text-[22px] font-bold text-[#032b41] mb-[16px]">
                  Recommended For You
                </div>
                <div className="font-light mb-[16px]">
                  We think you'll like these
                </div>
                {/* for you recommended books */}
                <div className="flex overflow-x-auto snap-x gap-[16px] mb-[16px]">
                  {loading ? (
                    <>
                      {loadingArr.map((book, index) => (
                        <>
                          <div className="min-w-[200px] w-[200px]">
                            {/* book image */}
                            <div className="w-full h-[240px] bg-[#e4e4e4] mb-[8px]"></div>
                            <div className="w-full h-[20px] bg-[#e4e4e4] mb-[8px]"></div>
                            <div className="w-[90%] h-[20px] bg-[#e4e4e4] mb-[8px]"></div>
                            <div className="w-[80%] h-[40px] bg-[#e4e4e4] mb-[8px]"></div>
                            <div className="w-[90%] h-[20px] bg-[#e4e4e4] mb-[8px]"></div>
                          </div>
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      {recommendedBooks.map((book, index) => (
                        <DisplayBook
                          key={index}
                          bookId={book?.id}
                          bookTitle={book?.title}
                          bookImg={book?.imageLink}
                          booksubTitle={book?.subTitle}
                          author={book?.author}
                          premium={book?.subscriptionRequired}
                          avgRating={book?.averageRating}
                          audioLink={book?.audioLink}
                          premiumStatus={premiumStatus}
                        />
                      ))}
                    </>
                  )}
                </div>
                <div className="text-[22px] font-bold text-[#032b41] mb-[16px]">
                  Suggested for you
                </div>
                <div className="font-light mb-[16px]">Browse these Books</div>
                {/* for you recommended books */}
                <div className="flex overflow-x-auto snap-x gap-[16px] mb-[16px]">
                  {loading ? (
                    <>
                      {loadingArr.map((book, index) => (
                        <>
                          <div className="min-w-[200px] w-[200px]">
                            {/* book image */}
                            <div className="w-full h-[240px] bg-[#e4e4e4] mb-[8px]"></div>
                            <div className="w-full h-[20px] bg-[#e4e4e4] mb-[8px]"></div>
                            <div className="w-[90%] h-[20px] bg-[#e4e4e4] mb-[8px]"></div>
                            <div className="w-[80%] h-[40px] bg-[#e4e4e4] mb-[8px]"></div>
                            <div className="w-[90%] h-[20px] bg-[#e4e4e4] mb-[8px]"></div>
                          </div>
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      {suggestedBooks.map((book, index) => (
                        <DisplayBook
                          key={index}
                          bookId={book?.id}
                          bookTitle={book?.title}
                          bookImg={book?.imageLink}
                          booksubTitle={book?.subTitle}
                          author={book?.author}
                          premium={book?.subscriptionRequired}
                          avgRating={book?.averageRating}
                          audioLink={book?.audioLink}
                          premiumStatus={premiumStatus}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function DisplayBook({
  bookTitle,
  bookId,
  bookImg,
  booksubTitle,
  author,
  premium,
  avgRating,
  audioLink,
  premiumStatus,
}) {
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
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

  const onLoadedMetadata = () => {
    setDuration(audioRef.current?.duration);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", onLoadedMetadata);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          onLoadedMetadata
        );
      }
    };
  }, []);

  useEffect(() => {
    setDuration(audioRef.current?.duration);
  }, []);

  return (
    <>
      <Link
        href={`book/${bookId}`}
        className="max-w-[200px] pt-[32px] px-[12px] pb-[12px] hover:bg-[#f1f6f4] relative"
      >
        {!premiumStatus ? (
          premium ? (
            <div className="w-[55px] absolute top-0 right-0 bg-[#032b41] h-[18px] flex items-center text-white text-[10px] px-[8px] rounded-[20px]">
              Premium
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
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
        <div className="flex items-center gap-[8px]">
          {/* recommended book details */}
          <div className="flex items-center gap-[4px]">
            <FiClock className="w-[16px] h-[16px] text-[#6b757b]" />
            <audio src={audioLink} ref={audioRef} />
            <div className="text-[14px] text-[#6b757b] font-light ">
              {formatTime(duration)}
            </div>
          </div>
          {/* recommended book details */}
          <div className="flex items-center gap-[4px]">
            <AiOutlineStar className="w-[16px] h-[16px] text-[#6b757b]" />
            <div className="text-[14px] text-[#6b757b] font-light">
              {avgRating}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
