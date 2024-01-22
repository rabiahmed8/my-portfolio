import React from "react";
import Link from "next/link";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";

const Nav = () => {
  return (
    <div className="flex flex-row items-center text-white z-10 justify-between w-full bg-gradient-to-b from-[#000000] to-[#00000000] pl-20 pr-32 fixed ">
      <Link href="Home">
        <h1 className="font-bold text-2xl hover:text-purple-400">My Portfolio</h1>
      </Link>

      <div className="flex flex-row [&>*]:p-4">
        <div className="hover:text-purple-400">
          <Link href="Home">Home</Link>
        </div>
        <div className="hover:text-purple-400">
          <Link href="Home">Home</Link>
        </div>
        <div className="hover:text-purple-400">
          <Link href="Home">Home</Link>
        </div>
        <div className="hover:text-purple-400">
          <Link href="Home">Home</Link>
        </div>
      </div>
      <div className="mr-2 font-bold hover:text-purple-400">Login</div>
    </div>
  );
};

export default Nav;
