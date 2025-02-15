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
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([]);
        break;
      case 2:
        showImages([0]);
        break;
      case 3:
        showImages([0, 1]);
        break;
      case 4:
        showImages([0, 1, 2]);
        break;
      case 5:
        showImages([0, 1, 2, 3]);
        break;
      case 6:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 7:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="relative w-full h-[70vh] md:h-auto">
      <div className="md:mx-auto md:text-center md:max-w-screen-xl md:mx-auto md:block flex h-full w-full">
        <div className="md:w-auto w-1/3 relative overflow-hidden">
          <h1 className="text-[45vw] leading-none font-medium select-none tracking-tight md:text-[37vw] leading-none font-medium select-none tracking-tight -rotate-90 md:rotate-0 mt-[35vh] md:mt-0">
            work
          </h1>
        </div>
        <div className="md:hidden block w-1/3 relative overflow-hidden">
          <h1 className="text-[45vw] leading-none font-medium select-none tracking-tight leading-none font-medium select-none tracking-tight -rotate-90 mt-[35vh]">
            work
          </h1>
          </div>
          <div className="md:hidden block w-1/3 relative overflow-hidden">
          <h1 className="text-[45vw] leading-none font-medium select-none tracking-tight leading-none font-medium select-none tracking-tight -rotate-90 mt-[35vh]">
            work
          </h1>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full md:absolute md:top-0 md:w-full md:h-full">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                key={index}
                className="w-44 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] md:w-60 md:rounded-lg md:absolute md:-translate-x-[50%] md:-translate-y-[50%]"
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
