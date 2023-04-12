import { useState, useEffect, useRef } from "react";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import { useMediaQuery } from "@react-hook/media-query";

function App() {
  const [nav, setNav] = useState(false);
  const belowMd = useMediaQuery("(max-width: 767px)");


  
  return (
    <div>
      <NavBar nav={nav} setNav={setNav} belowMd={belowMd}/>
      <HeroSection nav={nav} belowMd={belowMd}  />
      <Projects />
      <About />
    </div>
  );
}

export default App;
