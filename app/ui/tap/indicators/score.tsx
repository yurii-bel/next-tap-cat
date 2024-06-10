"use client";
import useStore from "@/app/store/store";
import Image from "next/image";

export function Score() {
  const score = useStore((state) => state.score);
  return (
    <div className="flex justify-center items-center w-full gap-2 border-2 rounded-md border-orange-200 py-4">
      <Image src={`/coin.png`} alt="coin" width="36" height="36" />
      <p className="font-bold text-3xl text-orange-100">{score}</p>
    </div>
  );
}
