import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "motion/react";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorColor, setCursorColor] = useState("bg-zinc-100");

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div className="w-full h-full bg-zinc-900 text-white font-['satoshi_variable']">
      <motion.div
        className="cursor fixed border-2 border-zinc-100 mix-blend-difference w-5 h-5 rounded-full bg-transparent top-0 left-0"
        variants={variants}
        animate="default"
      ></motion.div>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
