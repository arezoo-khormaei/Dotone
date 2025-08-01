import { useEffect, useRef, useState } from "react";
import { PauseIcon } from "@radix-ui/react-icons";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        handlePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full mx-auto aspect-video overflow-hidden bg-black group">
      <video
        ref={videoRef}
        src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
        className="w-full h-full object-cover"
        onClick={handlePlayPause}
      />

      <button
        onClick={handlePlayPause}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-black/40 hover:bg-black/60 transition rounded-full ${
          isPlaying
            ? "w-12 h-12 opacity-0 group-hover:opacity-100"
            : "w-16 h-16"
        }`}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <PauseIcon className="md:w-16 w-8 md:h-16 h-8 text-white" />
        ) : (
          <img
            src="/icons/play.svg"
            alt=""
            className="md:w-16 w-8 md:h-16 h-8"
          />
        )}
      </button>
    </div>
  );
}
