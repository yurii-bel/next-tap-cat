"use client";
import Image from "next/image";
import { useState } from "react";
import useStore from "@/app/store/store";
import { Click } from "@/app/lib/definitions";

export function Tap() {
  const increment = useStore((state) => state.increment);
  const [isActive, setIsActive] = useState(false);
  const [clicks, setClicks] = useState<Click[]>([]);
  const tapBonus = useStore((state) => state.tapBonus);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // tap numbers effect
    const x = e.clientX;
    const y = e.clientY;
    const id = Math.random().toString(36).substring(2);

    setClicks([...clicks, { x, y, id }]);

    setTimeout(() => {
      setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
    }, 2000); // Remove the click effect after 1 second

    increment();
    setIsActive(true);
    setTimeout(() => setIsActive(false), 10);
  };

  return (
    <>
      {clicks.map(({ x, y, id }) => (
        <span
          key={id}
          className="p-2 bg-orange-900/90 rounded-full absolute z-50 text-3xl text-white font-bold transform animate-fade"
          style={{ left: x, top: y }}
        >
          +{tapBonus}
        </span>
      ))}
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        className="relative transition-transform ease-in-out duration-100"
      >
        <div
          className={`h-full flex flex-col justify-between items-center p-6 transition-transform duration-100 ease-in-out ${
            isActive ? "scale-95" : ""
          }`}
        >
          <div className="flex justify-center items-center border-2 border-black rounded-full bg-orange-200 w-[380px] h-[380px] p-8">
            <Image src={`/cat-2.png`} alt="cat-face" width="320" height="320" />
          </div>
        </div>
      </button>
    </>
  );
}
