import { motion } from "framer-motion";
import { useState } from "react";
import cardImg from "../assets/card.svg";
import cardReverse from "../assets/card-reverse.svg";

export default function FlipCard() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        relative perspective-1000
        w-[90vw] max-w-[600px]
        h-[260px] sm:h-[320px] md:h-[380px]
      "
    >
      <motion.div
        className="relative w-full h-full cursor-pointer select-none"
        animate={{ rotateY: open ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setOpen(!open)}
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-3xl backface-hidden shadow-2xl overflow-hidden z-20">
          <img src={cardImg} className="absolute inset-0 w-full h-full object-cover" />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              🎄 Merry Christmas
            </h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-white/80">
              Click to open
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-3xl shadow-2xl backface-hidden rotate-y-180 overflow-hidden">
          <img src={cardReverse} className="absolute inset-0 w-full h-full object-cover" />

          <div className="relative z-10 h-full p-5 sm:p-8 flex flex-col justify-center text-center bg-white/20 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-800 mb-3 md:mb-4">
              Season’s Greetings ✨
            </h3>
            <p className="text-sm sm:text-base text-red-700 leading-relaxed">
              Wishing you a warm and peaceful Christmas,
              filled with happiness, good health,
              and plenty of joyful moments. Maybe one day,
              we’ll get the chance to meet in person 🙂
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

