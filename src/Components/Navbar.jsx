import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center mt-2">
        <img src="https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
          ) : (
            <a key={index} className="font-regular text-sm flex gap-1 items-center">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00ff19" }}
                  className="inline-block w-1 h-1 bg-green-400 rounded-full"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
      </div>
      <Button title={"Start a Project"} />
    </div>
  );
}

export default Navbar;
