// utils/postUserToDB.ts

import useStore from "../store/store";
import { useEffect } from "react";

export const usePostUserToDB = () => {
  const user = useStore((state) => state.user);

  if (user) {
    console.log(user);
  }

  const postUserToDB = async () => {
    try {
      const response = await fetch("/api/post-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const newUser = await response.json();
      console.log(newUser);
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Handle or propagate the error as needed
    }
  };

  useEffect(() => {
    if (user) {
      postUserToDB();
    }
  }, [user]);

  return { postUserToDB };
};
