import React from "react";
import { VscLinkExternal } from "react-icons/vsc";
import left from "../assets/slideleft.jpeg";
import right from "../assets/slideright.jpg";
import { Slide, Fade, Zoom  } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const leftAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    
  }
  to {
    opacity: 0;
    transform: translate3d(-300px, 0, 0);
  }
`;
const rightAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    
  }
  to {
    opacity: 0;
    transform: translate3d(300px, 0, 0);
  }
`;

const ProjectItem = ({ title, imgUrl, tech, projUrl }) => {
  return (
    <div className="flex relative">
      <div className="absolute top-0 left-0 w-full h-full z-[-10] flex flex-col justify-center items-center">
        <Zoom delay={400} fraction={1} triggerOnce>
        <img
          src={imgUrl}
          alt=""
          className=" max-w-[500px] rounded-2xl"
        />
        </Zoom>
      <Fade direction="up" cascade delay={500} fraction={1} triggerOnce>  
      <p> {title}</p>
      {tech.map((item) => (
        <span>{item}</span>
      ))}
      </Fade>

      </div>
      <Slide
        delay={200}
        fraction={1}
        keyframes={leftAnimation}
        triggerOnce
      >
        <img src={left} alt="" className="z-10" />
      </Slide>
      <Slide
        delay={200}
        fraction={1}
        keyframes={rightAnimation}
        triggerOnce
      >
        <img src={right} alt="" className="z-10" />
      </Slide>
    </div>
  );
};

export default ProjectItem;
