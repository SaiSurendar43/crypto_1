import Image from "next/image";
import Link from "next/link";
import { Nav_links } from "../Constant/index";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {IoSearchOutline} from "react-icons/io5"
import { BiLogoApple } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gradient-to-r from-neutral-800 to-slate-200   items-center px-4 py-2 maxcontainer">
      <Link className="flex" href="/">
        <Image src="/logo.png" width={30} height={30} alt="logo" />
      </Link>
      
      <ul className="px-2 hidden items-center h-full lg:gap-x-4 lg:flex md:flex md:gap-2">
        {Nav_links.map((link) => (
          <li
            className="hover:bg-[#1E1F21] py-1 px-2  text-white rounded-full transition-all duration-100"
            key={link.key}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <ul className="px-5 h-30 gap-x-4 flex lg:flex md:flex items-center justify-between">
        <li className="hidden md:hidden lg:block">
          <IoChevronDownOutline />
        </li>
        <li className="relative">
          <input
            className="border border-gray-400 rounded-xl w-[50px] lg:w-[400px] md:w-[100px] focus:outline-none text-start px-2 pl-8"
            type="text"
            placeholder=""
          />
          <IoSearchOutline className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500" />
        </li>
        <li>
          <IoChevronDownOutline />
        </li>
        <button className="border border-gray-400 text-sm md:w-[150px] lg:w-[150px] shadow-lg flex justify-center items-center gap-2 bg-black rounded-2xl px-2 mx-2 py-2 text-white">
          <p className="hidden md:block">Get the App</p>
          <span>
            <BiLogoApple />
          </span>
          <Image
            className="object-cover"
            src="/google-play.png"
            height={15}
            width={15}
            alt="play"
          />
        </button>
        <button className="border  hover:bg-fuchsia-900 md:hover:bg-fuchsia-900 px-2 py-2 lg:w-[100px] bg-[#2C192C] text-[#FC72FF] rounded-xl shadow-lg">
          Connect
        </button>
      </ul>

      {/* <ul className="px-2 h-full flex   gap-5 lg:gap:12 lg:flex items-center justify-end" >
       
      </ul> */}
    </nav>
  );
};

export default Navbar;
