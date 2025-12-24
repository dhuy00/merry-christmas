import { useState } from "react";

import Snow from "../components/Snow";
import SnowFlake from "../components/SnowFlake";
import SnowFlake2 from "../components/SnowFlake2";
import FlipCard from "../components/FlipCard";

import snowField2 from "../assets/snow_field2.svg";
import pineTree from "../assets/pine_tree.svg";
import pineTree2 from "../assets/pine_tree2.svg";
import pineGhost from "../assets/pine_ghost.svg";
import decor from "../assets/decor.svg";
import card from "../assets/card.svg";
import moon from "../assets/moon.svg";
import raindeer2 from "../assets/raindeer2.svg";
import snowman from "../assets/snowman.svg";
import house from "../assets/house.svg";
import tree from "../assets/tree.svg";

export default function Home() {
  const [isShowCard, setIsShowCard] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center px-4 sm:px-6">
      {/* Snow effects */}
      <Snow />
      <SnowFlake />
      <SnowFlake2 />

      {/* ================= MODAL CARD ================= */}
      {isShowCard && (
        <>
          {/* Backdrop */}
          <div
            className="absolute inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsShowCard(false)}
          />

          {/* Center card */}
          <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <FlipCard />
            </div>
          </div>
        </>
      )}

      {/* ================= SCENE ================= */}

      {/* Moon */}
      <img
        src={moon}
        alt="moon"
        className="
          absolute
          h-[180px] sm:h-[300px] md:h-[400px]
          top-[4%] sm:top-[6%]
          left-[5%] sm:left-[12%]
        "
      />

      {/* Raindeer (hide on mobile) */}
      <img
        src={raindeer2}
        alt="raindeer"
        className="
          hidden sm:block
          absolute
          h-[220px] md:h-[300px]
          top-[15%]
          -left-[30%]
        "
        style={{ animation: "raindeerRun 10s linear infinite" }}
      />

      {/* Decor */}
      <img
        src={decor}
        alt="decor"
        className="absolute top-6 sm:top-12 h-[70px] sm:h-[100px] right-6 sm:right-12"
      />

      {/* Pine trees */}
      <img
        src={pineTree}
        alt="pineTree"
        className="
          absolute bottom-16
          h-[200px] sm:h-[300px]
          left-6 sm:left-12
        "
      />

      <img
        src={pineTree}
        alt="pineTree"
        className="
          absolute bottom-16
          h-[180px] sm:h-[300px]
          right-6 sm:right-12
        "
      />

      <img
        src={pineTree}
        alt="pineTree"
        className="
          hidden sm:block
          absolute bottom-16
          h-[200px]
          left-[20%]
          z-10
        "
      />

      <img
        src={pineTree2}
        alt="pineTree"
        className="
          hidden sm:block
          absolute bottom-16
          h-[120px]
          left-[10%]
          z-10
        "
      />

      <img
        src={pineTree2}
        alt="pineTree"
        className="
          hidden sm:block
          absolute bottom-[5%]
          h-[100px]
          left-[60%]
          z-10
        "
      />

      {/* House & tree */}
      <img
        src={house}
        alt="house"
        className="
          absolute bottom-[10%]
          h-[120px] sm:h-[150px]
          left-[38%]
          z-10
        "
      />

      <img
        src={tree}
        alt="tree"
        className="
          absolute bottom-[10%]
          h-[120px] sm:h-[150px]
          left-[28%]
          z-10
        "
      />

      {/* Ghost trees (hide some on mobile) */}
      <img
        src={pineGhost}
        alt="pineGhost"
        className="hidden sm:block absolute bottom-[10%] h-[150px] left-[10%]"
      />
      <img
        src={pineGhost}
        alt="pineGhost"
        className="hidden sm:block absolute bottom-[10%] h-[180px] left-[15%]"
      />
      <img
        src={pineGhost}
        alt="pineGhost"
        className="hidden sm:block absolute bottom-[10%] h-[120px] left-[25%]"
      />
      <img
        src={pineGhost}
        alt="pineGhost"
        className="hidden sm:block absolute bottom-[10%] h-[180px] left-[37%]"
      />
      <img
        src={pineGhost}
        alt="pineGhost"
        className="hidden sm:block absolute bottom-[10%] h-[180px] right-[12%]"
      />

      {/* Card icon */}
      <img
        src={card}
        alt="card"
        onClick={() => setIsShowCard(true)}
        className="
          absolute
          bottom-[30%] sm:bottom-[38%]
          right-[6%] sm:right-[9%]
          h-[22px] sm:h-[25px]
          cursor-pointer
          transition-all duration-300 ease-out
          drop-shadow-[0_0_8px_rgba(255,240,180,0.7)]
          hover:drop-shadow-[0_0_10px_rgba(255,255,220,1)]
          hover:scale-110
        "
      />

      {/* Snowman */}
      <img
        src={snowman}
        alt="snowman"
        className="
          absolute bottom-[8%]
          h-[90px] sm:h-[130px]
          right-[12%] sm:right-[18%]
        "
      />

      {/* Snow field layers */}
      <div>
        <img
          className="absolute -left-2 bottom-4 w-[1200px] sm:w-[2200px]"
          src={snowField2}
          alt="snowfield"
        />
        <img
          className="absolute -left-2 -bottom-2 w-[1200px] sm:w-[2200px]"
          src={snowField2}
          alt="snowfield"
        />
        <img
          className="absolute -left-0 -bottom-6 w-[1200px] sm:w-[2200px]"
          src={snowField2}
          alt="snowfield"
        />
      </div>

      {/* ================= TEXT ================= */}
      <div className="absolute top-[12%] sm:top-[20%] right-0 z-0 px-4 sm:px-0">
        <div
          className="
            font-freck
            text-[3rem] sm:text-[5rem] md:text-[6.5rem]
            max-w-full sm:max-w-64
            leading-tight sm:leading-[100px]
          "
        >
          MERRY CHRISTMAS
        </div>

        <p
          className="
            font-chewy font-medium
            text-[1rem] sm:text-[1.25rem] md:text-[1.5rem]
            max-w-full sm:max-w-[800px]
            mt-2
          "
        >
          Merry Christmas, PThanh! Wishing you a peaceful holiday season — and
          hopefully fewer deadlines and less OT deciding to show up uninvited
          =)).
        </p>
      </div>
    </div>
  );
}
