import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
  
function Card({ data, hover }) {
  return (
    <motion.div whileHover={{backgroundColor: hover === "card1" ? "#3e4049" : "#7443ff"}}
      className={`p-5 rounded-xl min-h-[25rem] flex flex-col justify-between ease-in ${data.width} ${data.bgcolor}`}
    >
      <motion.div whileHover={{paddingLeft:"5px"}} className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-sm">{data.heading}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className={`text-[1.8vw] font-medium mt-5 ${data.headingWidth}`}>
          {data.secheading}
        </h1>
      </motion.div>
      <div className="down w-full"> 
        {data.start && (
          <>
            <h1 className="text-8xl font-semibold mt-24 tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full px-5 py-2 border-[1px] border-zinc-300 mt-5">
              Contact us
            </button>
          </>
        )}
        {data.para && (
          <p className="text-sm text-zinc-300">Explore what drives our team.</p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
