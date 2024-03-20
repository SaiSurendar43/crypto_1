import React from "react";
import { GoArrowRight } from "react-icons/go";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

const Connect = () => {
  return (
    <main className="maxcontainer px-4 py-2 bg-[#171617]"
    >
      <div className="mb-5">
        <h1 className="md:text-4xl text-3xl font-serif font-semibold text-white">Connect with us</h1>
      </div>
      <div className="flex flex-col gap-10 md:flex-wrap md:flex-row lg:flex-wrap lg:flex-row">
        <div className="shadow-lg bg-[#2A1B15] h-auto rounded-2xl basis-1/5 flex-1">
          <button className="flex py-2 px-2 m-5 item-center justify-center hover:translate-x-5 transition-all text-xl  cursor-pointer w-auto font-thin text-[#FF4D00] font-sans rounded-2xl bg-[#131313]">
            <span className="mt-1 px-2 text-[#FF4D00] ">
              <BsFillQuestionCircleFill />
            </span>
            Help Center
            <span className="mt-2 px-2">
              <GoArrowRight />
            </span>
          </button>
          <div>
            <p className="mt-20 px-2 text-2xl font-serif font-semibold m-5 text-[#FF4D00]">Get Support</p>
          </div>
        </div>
        <div className="shadow-lg bg-[#22211A] h-auto rounded-2xl basis-1/5 flex-1">
          <button className="flex py-2 px-2 m-5 item-center justify-center hover:translate-x-5 transition-all text-xl  cursor-pointer w-auto font-thin text-[#8E8767] font-sans rounded-2xl bg-[#131313]">
            <span className="mt-1 px-2 text-[#8E8767] ">
              <FaBookOpen />
            </span>
            Blog
            <span className="mt-2 px-2">
              <GoArrowRight />
            </span>
          </button>
          <div>
            <p className="mt-20 px-2 text-2xl font-serif font-semibold m-5 text-[#8E8767]">Insights and news from them</p>
          </div>
        </div>
        <div className="shadow-lg bg-[#322132] h-auto rounded-2xl lg:basis-1/2 lg:flex-1 md:w-[500px]">
          <button className="flex py-2 px-2 m-5 item-center justify-center hover:translate-x-5 transition-all  text-xl  cursor-pointer w-auto font-thin text-[#FC72FF] font-sans rounded-2xl bg-[#131313]">
            <span className="mt-1 px-2 text-[#FC72FF] ">
              <RiMessage3Fill />
            </span>
             Stay connected
            <span className="mt-2 px-2">
              <GoArrowRight />
            </span>
          </button>
          <div>
            <p className="mt-20 px-2 text-2xl font-serif font-semibold m-5 text-[#FC72FF]">Follow @Uniswap on X for the latest updates</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Connect;
