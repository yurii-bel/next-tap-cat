import Link from "next/link";
import NavLinks from "./nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  return (
    <div className="flex h-full w-screen bg-slate-900/50">
      <div className="flex w-full grow space-x-4 p-4">
        <NavLinks />
      </div>
    </div>
  );
}
