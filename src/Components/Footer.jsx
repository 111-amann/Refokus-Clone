import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="md:max-w-screen-xl mx-auto md:pb-8 flex md:gap-32">
        <div className="md:basis-1/2 md:block hidden">
          <h1 className="md:text-[11.2rem] font-semibold tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="md:basis-1/2 flex md:gap-20 md:mt-8">
          <div className="md:basis-1/3 lg:block hidden">
            <h4 className="md:mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter (X?)", "linkedin"].map((item, index) => (
              <a className="block md:mt-1 text-zinc-500 capitalize" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="md:basis-1/3 lg:block hidden">
            <h4 className="md:mb-10 text-zinc-500 capitalize">sitemap</h4>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a className="block md:mt-1 text-zinc-300 capitalize" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="md:basis-1/2 md:pr-10 flex flex-col items-end xl:block hidden">
            <p className="text-sm font-medium text-right md:mt-14">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="http://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt=""
              className="md:w-32 md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
