import mainpic from "../assets/Me.jpg";
import jappic from "../assets/Japanese1.jpg";
import sword from "../assets/sword.png";
import sheath from "../assets/sheath.png";
import hover from "../styles/hover.module.css";
import { useState, useEffect } from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import DelayedLinks from "../reusable component/DelayedLinks";

const HeroSection = ({ nav, belowMd }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isGithub, setIsGithub] = useState(false);
  const [isLinkedIn, setIsLinkedIn] = useState(false);
  const [isClip, setIsClip] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleGithub = () => {
    setIsGithub(!isGithub);
  };
  
  const handleLinkedIn = () => {
    setIsLinkedIn(!isLinkedIn);
  };


  useEffect(() => {
    const clipTimeIn = setTimeout (() => {
      setIsClip(true);
    }, 2000)


    const clickTimeout = setTimeout(() => {
      setIsClicked(false);
      setIsGithub(false);
      setIsLinkedIn(false);
      setIsClip(false);
      setIsHovering(false);
    }, 2200);

    return () => {
      clearTimeout(clipTimeIn);
      clearTimeout(clickTimeout);
    };
  }, [isClicked, isGithub, isLinkedIn]);

  return (
    <section
      id="herosection"
      className="flex max-w-[62rem] px-5 sm:px-3 md:mx-5 min-h-[100vh] mx-auto"
    >
      <div className="flex w-[100%] md:flex-col">
        <div className="flex flex-1 flex-col justify-center items-center md:flex-none md:order-2">
          <h1 className="font-shuriken tracking-wide text-4xl xmd:text-3xl md:text-2xl xxxsm:text-xl uppercase py-2 md:flex-0">
            Hello, I'm Joshua
          </h1>
          <p className="font-poppins capitalize text-2xl md:text-xl">
            A junior web developer
          </p>
          <div className="flex flex-col items-center">
            {!nav || !belowMd ? (
              <motion.img
                key="sword"
                animate={{
                  x:
                  (isHovering && isGithub) || (!isHovering && isGithub)
                  ? [null, 66, 100, 20]
                  :
                  (isHovering && isLinkedIn) || (!isHovering && isLinkedIn)
                  ? [null, 66, 200, 150] 
                      : isHovering
                      ? 5
                      : 0,
                  rotate: isClicked || isGithub || isLinkedIn ? [0, -5, 90, -100] : 0,
                }}
                transition={{
                  x:
                    isClicked || isGithub || isLinkedIn ? { duration: 1 } : { duration: 0.1 },
                  rotate: {
                    delay: 0.2,
                    duration: 1.8,
                    ease: [0.1, 0.22, 0.22, 0.1],
                  },
                }}
                src={sword}
                alt="sword"
                className="flex items-center justify-center w-[300px] mt-5 transition-transform"
              />
            ) : (
              ""
            )}
            {!nav || !belowMd ? (
              <motion.img
                animate={{
                  x: isHovering ? -5 : 0,
                }}
                onMouseOver={() => {
                  setIsHovering(isClicked ? false : true);
                }}
                onMouseOut={() => {
                  setIsHovering(false);
                }}
                whileHover={{ x: -5 }}
                src={sheath}
                alt="sheath"
                className="absolute flex items-center justify-center w-[300px] xxxsm:w-[260px] xxxxsm:w-[265px]  mt-5"
              />
            ) : (
              ""
            )}
          </div>

          <div className="flex py-2">
            <DelayedLinks
              to="https://github.com/quadrovicente28"
              delay={2200}
              onClick={handleClick}
              isClicked={isClicked}
              setIsHovering={setIsHovering}
            >
              <AiOutlineGithub
                style={{
                  pointerEvents: isClicked || isGithub ? "none" : "auto",
                  clipPath:
                    ((isClicked || isGithub) && isClip)
                      ? "polygon(33% 24%, 81% 24%, 90% 44%, 91% 87%, 68% 93%, 33% 93%, 16% 81%, 18% 44%)"
                      : "none",
                }}
                onClick={handleGithub}
                className="mx-10"
                size={"38px"}
              />
            </DelayedLinks>
            <DelayedLinks
              to="https://www.linkedin.com/in/quadrovicente/"
              delay={2200}
              onClick={handleClick}
              isClicked={isClicked}
              setIsHovering={setIsHovering}
            >
              <AiFillLinkedin
                style={{
                  pointerEvents: isClicked || isLinkedIn ? "none" : "auto",
                  clipPath:
                    ((isClicked || isLinkedIn) && isClip)
                      ? "polygon(32% 38%, 80% 27%, 100% 100%, 0% 100%)"
                      : "none",
                }}
                onClick={handleLinkedIn}
                className="mx-10"
                size={"38px"}
              />
            </DelayedLinks>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center mr-7 md:justify-center md:mx-0  md:order-1 md:items-start md:mb-20 md:flex-none">
          {!nav || !belowMd ? (
            <img
              src={mainpic}
              alt="mypic"
              className={`${hover.mainpic}`}
              style={{ opacity: (isHovering || isClicked || isLinkedIn || isGithub) ? 0 : 1 }}
            />
          ) : (
            ""
          )}
          {!nav || !belowMd ? (
            <img
              src={jappic}
              alt="jappic"
              className={`${hover.jappic}`}
              style={{ opacity: (isHovering || isClicked || isLinkedIn || isGithub) ? 1 : 0 }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
