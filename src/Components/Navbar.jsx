import React, { useEffect, useState } from "react";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <div className="max-w-screen-xl mx-auto md:py-4 py-6 flex items-center justify-between border-b-[1px] border-zinc-700 relative">
      <div className="nleft flex items-center md:mt-2 px-4 md:px-0">
        <img
          src="https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Logo"
        />
        <div className="links md:flex md:gap-14 md:ml-20 hidden">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="font-regular text-sm flex gap-1 items-center"
              >
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

      <div className="hidden md:block">
        <Button title={"Start a Project"} />
      </div>

      <div
        className="mr-5 md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose size={28} /> : <IoMenu size={22} />}
      </div>

      <div
        className={`fixed top-[12%] left-0 z-40 h-full w-3/4 bg-zinc-900 text-white flex flex-col gap-6 py-10 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {["Home", "Work", "Culture", "News"].map((elem, index) => (
          <a
            key={index}
            className="text-2xl border-b-2 border-zinc-600 pl-5 py-3 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
