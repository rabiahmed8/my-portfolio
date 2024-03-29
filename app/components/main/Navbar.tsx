import React from "react";
import Image from "next/image";
import { Socials } from "@/Constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-[#2a0e61]/50 bg-[03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center custom-bounce"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin-slow"
          />
          <span className="font-bold hidden md:block text-gray-300">
            Portfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                <a
                href="#first-section" className="cursor-pointer">
                About me
                </a>
                <a href="#second-section" className="cursor-pointer">
                Skills
                </a>
                <a href="#third-section" className="cursor-pointer">
                Projects
                </a>
            </div>
        </div>

        <div className="flex flex-row gap-5">
            {Socials.map((social) => (
                <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
