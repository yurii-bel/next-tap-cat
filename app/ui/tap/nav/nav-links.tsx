"use client";

import {
  UserGroupIcon,
  WalletIcon,
  DocumentDuplicateIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Exchange", href: "/", icon: WalletIcon },
  {
    name: "Mine",
    href: "/mine",
    icon: CurrencyDollarIcon,
  },
  { name: "Friends", href: "/friends", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow justify-center items-center gap-2 rounded-md bg-slate-800 p-3 text-sm font-medium hover:bg-orange-800 hover:text-orange-100 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-slate-800 text-blue-600": pathName === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
