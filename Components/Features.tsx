import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";


const Features = () => {
  return (
    <main className="maxcontainer bg-gradient-to-r from-neutral-900 to-slate-400 min-h-screen px-4 py-2">
      <div className="lg:flex md:flex">
        <div className=" shadow-lg  mt-3  w-auto  md:w-1/2 p-6 h-[300px] md:h-auto h:auto  rounded-3xl">
          <div>
            <h1 className="text-white  hover:translate-x-7 transition-all  cursor-pointer font-serif font-bold text-xl md:text-5xl">
              Trusted by millions
            </h1>
          </div>
          <div className=" my-7 md:my-20">
            <p className="text-white md:text-xl text-1xl font-medium leading-2">
              Uniswap products are powered by the Uniswap Protocol. The protocol
              is the largest onchain marketplace, with billions of dollars in
              weekly volume across thousands of tokens on Ethereum and 7+
              additional chains.
            </p>
          </div>
          <button className="flex py-2 mt-3 px-2 mb-2 item-center justify-center transition-all duration-100 text-white cursor-pointer w-auto font-bold teext-white font-sans rounded-2xl bg-[#171717] hover:bg-[#252525]">
            Learn more
            <span className="mt-2 px-2">
              <GoArrowRight />
            </span>
          </button>
        </div>
        <div className=" shadow-lg  mt-3  w-auto h-[400px] md:h-auto   md:w-1/2 p-2 ml-2  rounded-3xl">
          <div className=" lg:flex flex">
          <div className="shadow-lg  object-contain lg:w-1/2 w:1/2 md:w-[350px]  h-auto">
              <div className="absolute text-white">
                <p className="md:text-3xl text-2xl px-2 text-center mt-4 font-sans text-gray-400 font-semibold">
                  All time value
                </p>
                <p className="text-3xl hover:translate-y-5 transition-all mt-10 text-center font-sans font-bold">
                  $1.8T
                </p>
              </div>
              <Link href="/">
                <Image
                  className="object-cover mt-5 rounded-2xl"
                  src="/black.jpg"
                  alt="dot"
                  width={200}
                  height={300}
                />
              </Link>
            </div>
            <div className="shadow-lg ml-2 md:ml-3 lg:ml-52 lg:w-1/2 w:1/2 md:w-[350px]  h-auto">
              <div className="absolute text-white">
                <p className="md:text-3xl text-2xl px-2 text-center mt-4 font-sans text-gray-400 font-semibold">
                  All time swappers
                </p>
                <p className="text-3xl hover:translate-y-5 transition-all md:mt-10 mt-5 text-center font-sans font-bold">
                  $14.9M
                </p>
              </div>
              <Link href="/">
                <Image
                  className="object-cover mt-5 rounded-2xl"
                  src="/black.jpg"
                  alt="dot"
                  width={200}
                  height={300}
                />
              </Link>
            </div>
          </div>
          <div className=" lg:flex flex">
            <div className="shadow-lg mt-5  object-contain lg:w-1/2 w:1/2 md:w-[350px] h-auto">
              <div className="absolute text-white">
                <p className="md:text-3xl text-2xl px-2 text-center  mt-4 font-sans text-gray-400 font-semibold">
                  All time
                </p>
                <p className="md:text-3xl text-2xl px-2 text-center  mt-4 font-sans text-gray-400 font-semibold">
                  LP fees
                </p>
                <p className="text-3xl hover:-translate-y-5 transition-all md:mt-10 text-center font-sans font-bold">
                  $3.2B
                </p>
              </div>
              <Link href="/">
                <Image
                  className="object-cover  rounded-2xl"
                  src="/black.jpg"
                  alt="dot"
                  width={200}
                  height={300}
                />
              </Link>
            </div>
            <div className="shadow-lg mt-5 ml-2 md:ml-3 lg:ml-52 lg:w-1/2 w:1/2 md:w-[350px]  h-auto">
              <div className="absolute text-white">
                <p className="text-3xl px-2 text-center mt-4 font-sans text-green-600 font-semibold">
                  24H volume
                </p>
                <p className="text-3xl md:mt-10 hover:translate-y-5 transition-all text-center text-green-600 font-sans font-bold">
                  $2.2B
                </p>
              </div>
              <Link href="/">
                <Image
                  className="object-cover rounded-2xl"
                  src="/black.jpg"
                  alt="dot"
                  width={200}
                  height={300}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Features;
