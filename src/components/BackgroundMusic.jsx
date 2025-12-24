import { useEffect, useRef, useState } from "react";
import music from "../assets/christmas.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.volume = 0.4; // âm lượng vừa
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        
        <source src={music} type="audio/mpeg" />
      </audio>

      {/* Button bật / tắt nhạc */}
      <button
        onClick={toggleMusic}
        className="
          fixed top-6 left-6 z-50
          bg-white/70 backdrop-blur-md
          px-4 py-2 rounded-full
          text-sm font-medium
          shadow-lg
          hover:scale-105 transition
        "
      >
        {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
      </button>
    </>
  );
}
