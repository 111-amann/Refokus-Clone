import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto pb-8 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.2rem] font-semibold tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-20 mt-8">
          <div className="basis1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (X?)", "linkedin"].map((item, index) => (
              <a className="block mt-1 text-zinc-500 capitalize" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="basis1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">sitemap</h4>
            {["home", "work", "carrers","contact"].map((item, index) => (
              <a className="block mt-1 text-zinc-300 capitalize" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 pr-10 flex flex-col items-end">
            <p className="text-sm font-medium text-right mt-14">Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img src="http://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg" alt="" className="w-32 mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
