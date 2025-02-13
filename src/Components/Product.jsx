import React, { useState } from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full py-10 h-[21rem] ease-in duration-300`}
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
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-4xl font-medium ml-7 pt-12">{val.title}</h1>
        <div className="dets w-[23%] mr-20">
          <p className="mb-5 pt-12">{val.description}</p>
          <div className="flex  gap-4">
            {val.live && <Button title={"Live Website"} />}
            {val.case && <Button title={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
