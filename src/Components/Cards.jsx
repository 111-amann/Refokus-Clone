import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="max-w-screen-xl mx-auto py-20 flex gap-1">
      <Card
        data={{ 
          width: "basis-1/3", 
          start: false,
          para: true,
          heading: "Up Next: News",
          secheading: "Insights and behind the scenes",
          headingWidth: "w-[65%]",
          bgcolor: "bg-zinc-800",
        }}
        hover={"card1"}
      />
      <Card
        data={{
          width: "basis-2/3", 
          start: true,
          para: false,
          heading: "Get In Touch",
          secheading: "Let's get to it, together",
          headingWidth: "w-[25%]",
          bgcolor: "bg-zinc-700", 
        }}
        // hover="card2"
      />
    </div>
  );
}

export default Cards;
Cards;
