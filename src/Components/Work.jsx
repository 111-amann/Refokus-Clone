import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "55%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "42%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "58%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "51%",
      left: "54%",
      isActive: false,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "48%",
      left: "49%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   scrollNHideImages(Math.floor(latest*100));
  // });

  
  scrollYProgress.on("change", (data) => {
    function showImages(arr) {
      setImages(prev => (
        prev.map((item, index) => (
          arr.indexOf(index) === -1 ? (
            {...item, isActive: false}
          ) : {...item, isActive: true}
        ))
      ))
    }
  

   switch(Math.floor(data * 100)){
    case 0:
      showImages([]);
      break;
    case 2:
      showImages([0]);
      break;
    case 3:
      showImages([0,1]);
      break;
    case 4:
      showImages([0,1,2]);
      break;
    case 5:
      showImages([0,1,2,3]);
      break;
    case 6:
      showImages([0,1,2,3,4]);
      break;
    case 7:
      showImages([0,1,2,3,4,5]);
      break;
   }
  });


  return (
    <div className="w-full relative">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-[37vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
      </div>
      <div className="absolute top-0 w-full h-full">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                key={index}
                className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                src={elem.url}
                alt=""
                style={{ top: elem.top, left: elem.left }}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Work;
