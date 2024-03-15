import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="maxcontainer bg-gradient-to-r from-neutral-900 to-slate-400 px-4 py-2 lg:py-10 md:py-10">
      <div className="lg:flex md:flex">
        <div className=" mt-3  w-auto  md:w-1/2 p-6 h-[200px] md:h-auto h:auto  rounded-3xl">
          <div>
            <h1 className="text-white font-sans font-bold text-xl md:text-3xl">
              2024
            </h1>
          </div>
          <div className="my-5">
            <h1 className="text-white font-sans font-bold text-xl md:text-3xl">
              Uniswap Labs
            </h1>
          </div>
          <button className="my-10 md:flex lg:flex hidden gap-5 text-white ">
            <span className=" hover:text-green-400 transition ease-in-out duration-150 transform hover:scale-110 focus:outline-none active:text-gray-200  active:bg-zinc-500 ">
              <FaGithub size={30} />
            </span>
            <span className=" hover:text-blue-400 transition ease-in-out duration-150 transform hover:scale-110 focus:outline-none active:text-gray-200  active:bg-zinc-500 ">
              <FaTwitter size={30} />
            </span>
            <span className=" hover:text-indigo-500 transition ease-in-out duration-150 transform hover:scale-110 focus:outline-none active:text-gray-200  active:bg-zinc-500 ">
              <FaDiscord size={30} />
            </span>
          </button>
        </div>
        <div className=" mt-1 w-auto  md:w-1/2 p-6 h-[300px] md:h-auto h:auto  rounded-3xl">
          <div className="md:flex flex flex-wrap flex-row md:flex-wrap md:flex-row lg:flex-wrap lg:flex-row">
            <div className="w-1/2">
              <h1 className="text-xl font-sans font-bold text-white">APP</h1>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Swap</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Tokens</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">NFTs</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Pool</p>
            </div>
            <div className="w-1/2">
            <h1 className="text-xl font-sans font-bold text-white">Protocol</h1>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Governance</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Developers</p>
            </div>
            <div className="w-1/2">
            <h1 className="text-xl font-sans font-bold text-white">Company</h1>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Careers</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Blog</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Brand Assets</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Term & Privacy</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Trademark Policy</p>
            </div>
            <div className="w-1/2">
            <h1 className="text-xl font-sans font-bold text-white">Need help?</h1>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Contact Us</p>
              <p className="text-base text-black font-sans font-medium hover:text-white cursor-pointer">Help Center</p>
            </div>
          </div>
        </div>
      </div>
      <button className="my-10 mx-10 flex gap-5 text-white md:hidden lg:hidden ">
            <span className=" hover:text-green-400 transition ease-in-out duration-150 transform hover:scale-110 focus:outline-none active:text-gray-200  active:bg-zinc-500 ">
              <FaGithub size={30} />
            </span>
            <span className=" hover:text-blue-400 transition ease-in-out duration-150 transform hover:scale-110 focus:outline-none active:text-gray-200  active:bg-zinc-500 ">
              <FaTwitter size={30} />
            </span>
            <span className=" hover:text-indigo-500 transition ease-in-out duration-150 transform hover:scale-110 focus:outline-none active:text-gray-200  active:bg-zinc-500 ">
              <FaDiscord size={30} />
            </span>
          </button>
    </main>
  );
};

export default Footer;
