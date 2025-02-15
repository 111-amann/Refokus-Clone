import { motion } from "motion/react";
import React from "react";

function Marquee({ imagesurl, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 md:gap-20 gap-10 md:py-8 py-5 md:pr-24"
      >
        {imagesurl.map((url, index) => (
          <img src={url} key={index} className="md:h-auto md:w-auto h-5" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 md:gap-20 md:py-8 gap-10 py-5 md:pr-24"
      >
        {imagesurl.map((url, index) => (
          <img src={url} key={index} className="md:h-auto md:w-auto h-5" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
