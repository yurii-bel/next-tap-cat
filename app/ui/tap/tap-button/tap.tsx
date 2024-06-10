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
    setTimeout(() => setIsActive(false), 100);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      className="transition-transform ease-in-out duration-100"
    >
      <div
        className={`h-full flex flex-col justify-between items-center  p-6 transition-transform duration-100 ease-in-out ${
          isActive && "scale-90"
        }`}
      >
        <div className="flex justify-center items-center border-2 border-black rounded-full bg-orange-200 w-[380px] h-[380px] p-8">
          <Image src={`/cat-2.png`} alt="cat-face" width="320" height="320" />
        </div>
      </div>
    </button>
  );
}
