import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { GrBackTen, GrForwardTen } from "react-icons/gr";
import { useState, useRef, useEffect, useCallback } from "react";

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
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const skipForwardTenSecs = () => {
    setTimeProgress((audioRef.current.currentTime += 10));
  };

  const skipBackTenSecs = () => {
    setTimeProgress((audioRef.current.currentTime -= 10));
  };

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

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef) {
      const seconds = audioRef.current.duration;
      setDuration(audioRef.current.duration);
      progressBarRef.current.max = seconds;
    }
  });

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
              <button onClick={skipBackTenSecs}>
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
              <button onClick={skipForwardTenSecs}>
                <GrForwardTen className="fillWhiteSvg w-[28px] h-[28px] stroke-white" />
              </button>
            </div>
          </div>
          {/* audio progress wrapper */}
          <div className="w-[calc(100%/3)] flex items-center gap-[16px]">
            <audio src={bookData?.audioLink} ref={audioRef} />
            <div className="text-white text-[14px]">
              {formatTime(timeProgress)}
            </div>
            <input
              type="range"
              ref={progressBarRef}
              defaultValue="0"
              onChange={handleProgressChange}
            />
            <div className="text-white text-[14px]">{formatTime(duration)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
