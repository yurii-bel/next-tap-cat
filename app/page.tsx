"use client";

import { useEffect, useState } from "react";
import { Score } from "./ui/tap/indicators/score";
import { Tap } from "./ui/tap/tap-button/tap";
import { UserLabel } from "./ui/tap/user/user-label";
import { loadTelegramSDK } from "./utils/loadTelegramSDK";
import { usePostUserToDB } from "./utils/postUserToDB";

const Home = () => {
  const { postUserToDB } = usePostUserToDB();
  useEffect(() => {
    loadTelegramSDK(); // Assuming this function is used to load SDK and set user in Zustand store
    postUserToDB()
      .then((newUser) => {
        console.log("User created successfully:", newUser);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-evenly items-center p-2">
      <UserLabel />
      <Score />
      <Tap />
    </div>
  );
};

export default Home;
