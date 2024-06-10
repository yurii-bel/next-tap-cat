import Background from "./ui/background";
import { Score } from "./ui/tap/indicators/score";
import { Tap } from "./ui/tap/tap-button/tap";
import { UserLabel } from "./ui/tap/user/user-label";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black/70">
      <Background />
      <div className="relative z-10 h-screen w-full flex flex-col justify-evenly items-center p-2">
        <UserLabel />
        <Score />
        <Tap />
      </div>
    </div>
  );
}
