import React from "react";
import { VscLinkExternal } from "react-icons/vsc";
import left from "../assets/slideleft.jpeg";
import right from "../assets/slideright.jpg";
import { Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const leftAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    
  }
  to {
    opacity: 0;
    transform: translate3d(-300px, -50px, 0);
  }
`;
const rightAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    
  }
  to {
    opacity: 0;
    transform: translate3d(300px, -50px, 0);
  }
`;

const ProjectItem = ({ title, imgUrl, tech, projUrl }) => {
  return (
    <div className="flex relative">
      <div className="flex items-center">
        <img
          src={imgUrl}
          alt=""
          className="absolute z-[-10] max-w-[500px] rounded"
        />
      </div>
      <Slide
        delay={100}
        fraction={1}
        keyframes={leftAnimation}
        triggerOnce
      >
        <img src={left} alt="" className="z-10" />
      </Slide>
      <Slide
        delay={100}
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
