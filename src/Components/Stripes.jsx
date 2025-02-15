import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  const data = [
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 52,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 2,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 12,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 52,
    },
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 2,
    },
  ];

  const responsiveData = [
    {
      url: "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 52,
    },
  ]

  const lastIndex = data.length -1; 
  const resLastIndex = responsiveData.length -1; 
  
  return (
    <>
    <div className="md:flex items-center md:mt-20 hidden">
      {data.map((elem, index) => (
        <Stripe val={elem} key={index} li={lastIndex} i={index} />
      ))}
    </div>
    <div className="flex items-center md:hidden block">
      {responsiveData.map((elem, index) => (
        <Stripe val={elem} key={index} li={resLastIndex} i={index} />
      ))}
    </div>
    </>
  );
}

export default Stripes;
