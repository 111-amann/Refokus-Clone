import React from "react";

function Stripe({ val, li, i }) {
  return (
    <div
      className={`md:w-[20%] w-[100%] py-10 px-10 md:px-6 md:py-5 border-t-[1.2px] border-b-[1.2px] ${
        i !== li && "border-r-[1.2px]"
      } border-zinc-600 flex justify-between items-center`}
    >
      <img src={val.url} alt="" className="md:w-auto w-52" />
      <span className="font-semibold md:text-sm text-xl md:text-base">{val.number}</span>
    </div>
  );
}

export default Stripe;
