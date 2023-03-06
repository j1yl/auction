import Link from "next/link";
import React from "react";
import Auth from "./Auth";

const links = [
  {
    name: "/home",
    url: "/",
  },
  {
    name: "/about",
    url: "/about",
  },
  {
    name: "/catalog",
    url: "/catalog",
  },
  {
    name: "/account",
    url: "/account",
  },
];

const Sidebar = () => {
  return (
    <aside className="h-screen w-1/6 border border-black p-2">
      <div>
        <Link href={"/"} className="text-xl">
          myauction
        </Link>
      </div>
      <div className="flex flex-col justify-start">
        {links.map((link) => (
          <Link href={link.url} className="w-max hover:underline">
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <Auth />
      </div>
    </aside>
  );
};

export default Sidebar;
