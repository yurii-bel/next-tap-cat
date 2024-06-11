// app/page.tsx
"use client"; // This directive tells Next.js that this is a client component

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Background from "./ui/background";
import { Score } from "./ui/tap/indicators/score";
import { Tap } from "./ui/tap/tap-button/tap";
import { UserLabel } from "./ui/tap/user/user-label";
import { User } from "./lib/definitions";

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadTelegramSDK = async () => {
      if (typeof window !== "undefined") {
        const WebApp = (await import("@twa-dev/sdk")).default;
        const telegram = WebApp;

        if (telegram) {
          telegram.ready();

          // Get the user data
          const user = telegram.initDataUnsafe?.user;
          if (user) {
            setUser({
              first_name: user.first_name,
              last_name: user.last_name,
              photo_url: user.photo_url,
            });
          }
        }
      }
    };

    loadTelegramSDK();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black/70">
      <Background />
      <div className="relative z-10 h-screen w-full flex flex-col justify-evenly items-center p-2">
        <UserLabel user={user} />
        <Score />
        <Tap />
      </div>
    </div>
  );
};

export default Home;
