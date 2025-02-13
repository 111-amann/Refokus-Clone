import { motion } from "motion/react";
import React from "react";

function Marquee({ imagesurl, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-8 pr-24"
      >
        {imagesurl.map((url, index) => (
          <img src={url} key={index} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-8 pr-24"
      >
        {imagesurl.map((url, index) => (
          <img src={url} key={index} className="" />
        ))}
      </motion.div>
      
    </div> 
  );
}

export default Marquee;
