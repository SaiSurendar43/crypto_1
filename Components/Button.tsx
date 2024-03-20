import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

type Buttonprops = {
  type: "button" | "submit";
  tittle: string;
  icon?: string;
  text1: string;
  text2: string;
  varient: string;
  icon1?:any
  value:string
};

const Button = ({ type, tittle, icon, text1, text2,icon1,varient,value }: Buttonprops) => {
  return (
    <button
      className={`flex  hover:bg-gray-500 transition ease-in-out duration-150 transform hover:scale-105 focus:outline-none active:text-gray-200  active:bg-zinc-500  m-2 px-3 py-2 w-full text-white items-center gap-1 md:gap-3 lg:gap-12 rounded-2xl border ${varient}`}
      type={type}
    >
      {icon && <Image src={icon} alt={tittle} width={16} height={16} />}
      <label className="font-serif font-semibold whitespace-nowrap cursor-pointer">
        {tittle}
      </label>
      <p className="text-gray-400">{text1}</p>
      <p className="text-white font-sans font-medium">{text2}</p>
       <p className="text-orange-700 text-sm">{icon1}</p>
      <p className="text-orange-700 text-sm">{value}</p>
    

    </button>
  );
};

export default Button;
