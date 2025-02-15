import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="max-w-screen-xl mx-auto md:py-20 flex md:flex-row flex-col-reverse md:gap-0 gap-3 px-2 md:px-0 md:gap-1">
      <Card
        data={{ 
          width: "md:basis-1/3", 
          start: false,
          para: true,
          heading: "Up Next: News",
          secheading: "Insights and behind the scenes",
          headingWidth: "md:w-[65%]",
          bgcolor: "bg-zinc-800",
          cardHeight: "md:h-[25rem] h-[30vh]"
        }}
        hover={"card1"}
      />
      <Card
        data={{
          width: "md:basis-2/3", 
          start: true,
          para: false,
          heading: "Get In Touch",
          secheading: "Let's get to it, together",
          headingWidth: "md:w-[25%] w-[60%]",
          bgcolor: "bg-zinc-700", 
          cardHeight: "md:h-[25rem] h-[60vh]"
        }}
        // hover="card2"
      />
    </div>
  );
}

export default Cards;
