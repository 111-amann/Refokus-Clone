import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ data, hover }) {
  return (
    <motion.div 
      whileHover={{ backgroundColor: hover === "card1" ? "#3e4049" : "#7443ff" }}
      className={`p-5 rounded-xl flex flex-col justify-between ease-in ${data.width} ${data.bgcolor} ${data.cardHeight}`}
    >
      <motion.div whileHover={{ paddingLeft: "5px" }} className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-sm">{data.heading}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className={`md:text-[1.8vw] text-3xl mt-5 font-medium ${data.headingWidth}`}>
          {data.secheading}
        </h1>
      </motion.div>
      <div className="down w-full">
        {data.start && (
          <>
            <h1 className="lg:text-8xl md:text-7xl font-semibold md:mt-24 text-6xl mb-8 md:mb-0 tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full px-5 md:text-normal text-xl py-2 border-[1px] border-zinc-300 md:mt-5">
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
