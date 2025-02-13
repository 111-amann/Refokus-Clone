import React from "react";

function Stripe({ val, li, i }) {
  return (
    <div
      className={`w-[20%] px-6 py-5 border-t-[1.2px] border-b-[1.2px] ${
        i != li && "border-r-[1.2px]" 
      } border-zinc-600 flex justify-between items-center `}
    >
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
