import Link from "next/link";
import React from "react";
import { FaLaptop } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa6";
import { LuWalletCards } from "react-icons/lu";
import Image from "next/image";
import { IoCodeSlash } from "react-icons/io5";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

const Market = () => {
  return (
    <main className="maxcontainer px-4 py-4 bg-[#171617]"
    >
      <div className="lg:flex md:flex items-center justify-between">
        <div className=" shadow-lg  mt-3 bg-[#14171E] w-auto lg:h-[500px] md:h-[500px]  md:w-1/2 p-6 rounded-3xl">
          <button className="flex py-2 px-2 mb-2 item-center justify-center hover:translate-x-5 transition-all duration-300  cursor-pointer w-auto font-bold text-[#2ABDFF] font-sans rounded-2xl bg-[#131313]">
            <span className="mt-1 hover:-translate-x-1 transition-all duration-300 px-2 text-[#2ABDFF] ">
              <FaLaptop />
            </span>
            Web app
            <span className="mt-2 hover:-translate-x-1 transition-all duration-300 px-2">
              <GoArrowRight />
            </span>
          </button>
          <div className="text-[#2ABDFF] hover:translate-x-7 transition-all duration-300 text-4xl font-bold">
            <Link href="/">
              Swapping made simple Access thousand of tokens on 8+ chanins
              <p></p>
            </Link>
          </div>
          <div>
            <Button
              type="button"
              icon="/Firs.svg"
              tittle="Ethereum"
              text1="ETH"
              text2="$3,840.21"
              icon1={<FaChevronDown />}
              value="3.52"
              varient="#1B1B1B"
            />
          </div>
          <div>
          <Button
              type="button"
              icon="/second.png"
              tittle="USD Coin"
              text1="USDC"
              text2="0.998"
              icon1={<FaChevronDown />}
              value="0.27"
              varient="#1B1B1B"
            />
          </div>
          <div>
          <Button
              type="button"
              icon="/logo.png"
              tittle="Uniswap"
              text1="UNI"
              text2="13.76"
              icon1={<FaChevronDown />}
              value="1.71"
              varient="#1B1B1B"
            />
          </div>
          <div>
          <Button
              type="button"
              icon="/last.png"
              tittle="Lido DAO"
              text1="LDO"
              text2="3.16"
              icon1={<FaChevronDown />}
              value="7.82"
              varient="#1B1B1B"
            />
          </div>
        </div>
        <div className=" shadow-lg  mt-3 bg-[#322132] w-auto h-[420px] md:h-full lg:h-[500px] ml-2 md:w-1/2 p-6  rounded-xl">
        <button className="flex py-2 px-2 mb-2 item-center hover:-translate-x-5 transition-all duration-300 justify-center cursor-pointer w-auto font-bold text-[#FC72FF] font-sans rounded-2xl bg-[#131313]">
            <span className="mt-1 px-2 hover:translate-x-3 transition-all duration-300 text-[#FC72FF] ">
              <LuWalletCards/>
            </span>
             Uniswap Wallet
             <span className="mt-2 hover:translate-x-3 transition-all duration-300 px-2">
              <GoArrowRight /> 
            </span>
          </button>
          <div className="text-[#FC72FF] mx-5 text-3xl sticky -top-32 z-10  md:text-4xl font-bold">
            <Link href="/">
              The wallet built for swaping Available on ios and Android
              <p></p>
            </Link>
          </div>
             <div className="object-cover px-2">
            <Image className="hover:-translate-y-20 transition-shadow" src="/swaplist.png" width={500} height={500} alt='tap'/>
             </div>
        </div>
      </div>
      <div className="lg:flex md:flex items-center justify-between">
        <div className=" shadow-lg  mt-3 bg-[#182421] w-auto md:w-1/2 p-6 h-[250px] md:h-auto  rounded-3xl">
          <button className="flex py-2  px-2 mb-2 item-center hover:translate-x-7 transition-all duration-300 justify-center cursor-pointer w-auto font-bold text-[#02B393] font-sans rounded-2xl bg-[#131313]">
            <span className="mt-1 px-2  hover:translate-x-7 transition-all   text-[#02B393] ">
              <IoCodeSlash />
            </span>
             Developer docs
            <span className="mt-2   hover:translate-x-7 transition-all  px-2">
              <GoArrowRight />
            </span>
          </button>
          <div className="text-[#02B393]  hover:translate-x-7 transition-all    md:mt-10 lg:mt-40 text-3xl absolute md:text-1xl md:absolute font-bold">
            <Link href="/">
              Build the next generation of 
              <p>open application and tools</p>
              <p></p>
            </Link>
          </div>
          <div className="object-fill borde opacity-30  px-20 z-10 ">
            <Image className="rounded-xl  hover:translate-x-7 transition-all  shadow-lg" src="/dev3.avif" width={300} height={300} alt='tap'/>
             </div>
           
        </div>
        <div className=" shadow-lg  mt-3 bg-[#1D1923] w-auto h-[250px] md:h-[260px] lg:h-auto   md:w-1/2 p-6 ml-2  rounded-3xl">
          <button className="flex py-2  px-2 mb-2 item-center justify-center   hover:translate-x-7 transition-all  cursor-pointer w-auto font-bold text-[#9E62FF] font-sans rounded-2xl bg-[#131313]">
            <span className="mt-1 px-2 text-[#9E62FF] ">
              <BsFileEarmarkBarGraph />
            </span>
             Liquidity
            <span className="mt-2 px-2">
              <GoArrowRight />
            </span>
          </button>
          <div className="text-[#9E62FF]   md:mt-5 lg:mt-32 text-3xl px-2 absolute md:text-3xl lg:text-4xl md:absolute font-bold">
            <Link className="hover:translate-x-7 transition-all  cursor-pointer" href="/">
              provide liquilidy to pools on the Uniswap Protocol and  earn fees on swaps
              <p></p>
            </Link>
          </div>
          <div className="object-fill borde opacity-30  px-20 z-10 ">
            <Image className="rounded-xl shadow-lg" src="/dev.jpg" width={400} height={300} alt='tap'/>
             </div>
           
        </div>
      </div>
    </main>
  );
};

export default Market;
