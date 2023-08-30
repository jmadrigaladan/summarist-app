import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { GrBackTen, GrForwardTen } from "react-icons/gr";
import { useState, useRef, useEffect } from "react";

export async function getServerSideProps(context) {
  const bookRes = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${context.query.id}`
  );
  const bookData = await bookRes.json();
  return { props: { bookData } };
}

export default function BookPlayer({ bookData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef();
  console.log(audioRef);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const onLoadedMetadata = () => {
    // (audioRef.current.duration);
    const seconds = audioRef.current.audio.duration;
    console.log(seconds);
    // setDuration(seconds);
    // progressBarRef.current.max = seconds;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  // console.log(bookData);
  return (
    <div className="w-full">
      <Sidebar />
      <SearchBar />

      {/* summary */}
      <div className="w-full overflow-y-auto h-[calc(100vh-160px)]">
        {/* audio book summary */}
        <div className="whitespace-pre-line p-[24px] max-w-[800px] mx-auto">
          {/* audio book summary title */}
          <div className="text-[#032b41] text-[24px] border-b-[1px] border-[#e1e7ea] border-solid pb-[16px] leading-normal font-semibold mb-[32px]">
            {bookData?.title}
          </div>
          {/* audio book summary text */}
          <div className="whitespace-pre-line leading-[1.4] text-[#032b41]">
            {bookData?.summary}
          </div>
        </div>
        {/* audio wrapper */}
        <div className="w-full h-[80px] mt-auto flex items-center justify-between bg-[#042330] px-[40px] fixed bottom-0 left-0 ">
          {/* audio track wrapper */}
          <div className="flex w-[calc(100%/3)] gap-[12px]">
            {/* audio track img mask */}
            <figure className="flex max-w-[48px]">
              {/* book image wrapper */}
              <figure className="h-[48px] w-[48px] min-w-[48px]">
                {/* book img */}
                <img
                  className="w-full h-full"
                  src={bookData.imageLink}
                  alt=""
                />
              </figure>
            </figure>
            {/* audio track details wrapper */}
            <div className="text-white text-[14px] flex flex-col gap-[4px] justify-center">
              {/* audio track title */}
              <div>{bookData?.title}</div>
              {/* audio track author */}
              <div className="text-[#bac8ce]">{bookData?.author}</div>
            </div>
          </div>
          {/* audio controls wrapper */}

          <div className="w-[calc(100%/3)]">
            {/* audio controls */}
            <div className="flex items-center justify-center gap-[24px]">
              {/* audio back 10 secs btn */}
              <button className="">
                {/*  */}
                <GrBackTen className="fillWhiteSvg w-[28px] h-[28px] stroke-white" />
              </button>
              {/* audio play btn */}
              <button
                className="bg-white w-[40px] rounded-full h-[40px]"
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <BsPauseFill className="w-[28px] h-[28px] text-[#042330] ml-[6px]" />
                ) : (
                  <BsPlayFill className="w-[28px] h-[28px] text-[#042330] ml-[8px]" />
                )}
              </button>
              {/* audio forward 10 secs btn */}
              <button>
                <GrForwardTen className="fillWhiteSvg w-[28px] h-[28px] stroke-white" />
              </button>
            </div>
          </div>
          {/* audio progress wrapper */}
          <div className="w-[calc(100%/3)] flex items-center gap-[16px]">
            <audio
              src={bookData?.audioLink}
              ref={audioRef}
              onLoadedMetadata={onLoadedMetadata}
            />
            <div className="text-white text-[14px]">{timeProgress}</div>
            <input
              type="range"
              ref={progressBarRef}
              defaultValue="0"
              onChange={handleProgressChange}
            />
            <div className="text-white text-[14px]">{duration}</div>
            {/* <AudioPlayer audioFile={bookData?.audioLink} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
