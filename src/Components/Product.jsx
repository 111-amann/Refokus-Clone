import React, { useState } from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`md:w-full md:py-10 md:h-[21rem] h-fit md:bg-zinc-900 mt-2 md:mt-0 bg-zinc-700 ease-in duration-300 md:px-0 px-1 py-3 rounded-xl md:rounded-none`}
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
        className="max-w-screen-xl mx-auto flex flex-col md:p-0 p-3 md:flex-row items-center justify-between"
      >
        <h1 className="text-4xl font-medium md:ml-7 md:pt-12 text-center md:text-left">
          {val.title}
        </h1>
        <div className="md:hidden block w-full mt-6 mb-5">
          <img
            src={val.caseImg}
            alt="case study"
            className="object-cover w-full h-ful overflow-hidden rounded-2xl"
          />
        </div>
        <div className="dets w-full md:w-[23%] md:mr-20 text-center md:text-left">
          <p className="mb-5 md:pt-12 text-lg md:text-md">{val.description}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start ml-24 md:ml-0">
            {val.live && <Button title={"Live Website"} />}
            {val.case && <Button title={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
