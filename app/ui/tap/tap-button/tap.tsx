"use client";
import Image from "next/image";
import { useState } from "react";
import useStore from "@/app/store/store";

export function Tap() {
  const increment = useStore((state) => state.increment);
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    increment();
    setIsActive(true);
    if (navigator.vibrate) {
      navigator.vibrate(100); // Vibrate for 200 milliseconds
    }
    setIsActive(false);
    // setTimeout(() => setIsActive(false), 10);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      className="transition-transform ease-in-out duration-100"
    >
      <div
        className={`flex justify-center items-center border-2 border-black rounded-full bg-orange-200 w-[380px] h-[380px] p-8 transition-transform duration-100 ease-in-out ${
          isActive && "scale-95"
        }`}
      >
        {/* <div
          className={`h-full flex flex-col justify-between items-cente p-6 transition-transform duration-100 ease-in-out ${
            isActive && "scale-95"
          }`}
        > */}
        <Image
          // className={`h-full flex flex-col justify-between items-cente p-2 transition-transform duration-100 ease-in-out ${
          //   isActive && "scale-95"
          // }`}
          src={`/cat-2.png`}
          alt="cat-face"
          width="320"
          height="320"
        />
        {/* </div> */}
      </div>
    </button>
  );
}
