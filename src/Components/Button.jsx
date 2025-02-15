import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-32 md:w-44 md:px-4 md:h-9 h-7 relative md:mt-2 md:py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between relative overflow-hidden group flex flex-col md:gap-2">
      <div className="flex md:gap-3 absolute md:static top-[10%]">
        <span className="text-sm font-medium relative group-hover:translate-y-[-100%] group-hover:opacity-0 transition-transform duration-300 ease-in-out md:pr-0 pr-2">
          {title}
        </span>
        <IoIosReturnRight className="relative group-hover:translate-y-[-100%] group-hover:opacity-0 transition-transform duration-700 ease-in-out" />
      </div>

      <div className="flex md:gap-3 absolute top-full left-[13%] right-0 group-hover:top-[20%] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <span className="text-sm font-medium transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          {title}
        </span>
        <IoIosReturnRight className="transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
      </div>
    </div>
  ); 
}

export default Button;
