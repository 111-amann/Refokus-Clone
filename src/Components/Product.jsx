import React, { useState } from "react";
import Button from "./Button";
 
function Product({ val, mover, count }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`lg:w-full lg:py-10 lg:h-[21rem] h-fit lg:bg-zinc-900 mt-2 lg:mt-0 bg-zinc-700 ease-in duration-300 lg:px-0 px-1 py-3 rounded-lg lg:rounded-none`}
      style={{
        backgroundImage: isHovered ? `url(${val.bgImg})` : "none",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <div
        onMouseEnter={() => {
          setIsHovered(true);
          mover(count);
        }}
        onMouseLeave={() => setIsHovered(false)}
        className="max-w-screen-xl mx-auto flex flex-col lg:p-0 p-3 lg:flex-row items-center justify-between"
      >
        <h1 className="text-4xl font-medium lg:ml-7 lg:pt-12 text-center lg:text-left">
          {val.title}
        </h1>
        <div className="md:hidden block w-full mt-6 mb-5">
          <img
            src={val.caseImg}
            alt="case study"
            className="object-cover w-full h-full overflow-hidden rounded-2xl"
          />
        </div>
        <div className="dets w-full lg:w-[23%] lg:mr-20 text-center lg:text-left">
          <p className="mb-5 lg:pt-12 text-lg lg:text-lg">{val.description}</p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start ml-24 lg:ml-0">
            {val.live && <Button title={"Live Website"} />}
            {val.case && <Button title={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
