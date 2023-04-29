import mainpic from "../assets/Me.jpg";
import jappic from "../assets/Japanese1.jpg";
import sword from "../assets/sword.png";
import sheath from "../assets/sheath.png";
import hover from "../styles/hover.module.css";
import gif from "../assets/bowandarrow.gif";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { VscLinkExternal } from "react-icons/vsc";
import { motion } from "framer-motion";
import DelayedLinks from "../reusable component/DelayedLinks";
import { Link } from "react-scroll";

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
    const clipTimeIn = setTimeout(() => {
      setIsClip(true);
    }, 2000);

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
    <div className=" h-screen bg-samurai bg-cover bg-center">
      <section
        id="/"
        className="mx-auto grid h-[100vh] max-w-[62rem] px-5 md:mx-5 sm:px-3"
      >
        <div className="flex w-[100%] md:flex-col">
          <div className="flex flex-1 flex-col items-center justify-center md:order-2 md:flex-none">
            <h1 className="md:flex-0 mb-5 py-2 font-shuriken text-3xl uppercase tracking-wide md:mb-0 md:mt-3 md:text-2xl xxxsm:text-xl">
              Hello, I'm Joshua
            </h1>
            <p className="mb-5 font-poppins text-2xl capitalize md:mb-2 md:text-xl">
              A junior web developer
            </p>
            <p className="text-justify font-poppins text-base md:text-sm">
              Welcome to my portfolio! I'm Joshua, a recent college graduate
              with a degree in a different field, but my passion lies in web
              development. Over the past year, I've been honing my skills and
              gaining experience in front-end and back-end web development.
            </p>
            <div className="flex flex-col items-center">
              {!nav || !belowMd ? (
                <motion.img
                  key="sword"
                  animate={{
                    x:
                      (isHovering && isGithub) || (!isHovering && isGithub)
                        ? [null, 66, 100, 20]
                        : (isHovering && isLinkedIn) ||
                          (!isHovering && isLinkedIn)
                        ? [null, 66, 200, 150]
                        : isHovering
                        ? 5
                        : 0,
                    rotate:
                      isClicked || isGithub || isLinkedIn
                        ? [0, -5, 90, -100]
                        : 0,
                  }}
                  transition={{
                    x:
                      isClicked || isGithub || isLinkedIn
                        ? { duration: 1 }
                        : { duration: 0.1 },
                    rotate: {
                      delay: 0.2,
                      duration: 1.8,
                      ease: [0.1, 0.22, 0.22, 0.1],
                    },
                  }}
                  src={sword}
                  alt="sword"
                  className="mt-5 flex w-[300px] items-center justify-center transition-transform"
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
                  className="absolute mt-5 flex w-[300px] items-center justify-center xxxsm:w-[260px]  xxxxsm:w-[265px]"
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
                      (isClicked || isGithub) && isClip
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
                      (isClicked || isLinkedIn) && isClip
                        ? "polygon(32% 38%, 80% 27%, 100% 100%, 0% 100%)"
                        : "none",
                  }}
                  onClick={handleLinkedIn}
                  className="mx-10"
                  size={"38px"}
                />
              </DelayedLinks>
            </div>
            <div className="flex justify-center xxsm:gap-10">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
              >
                <div className="flex">
                  <p className="mt-5 font-poppins text-sm uppercase tracking-wide xxsm:text-xs">
                    <span className="xxsm:hidden">Look at my</span> work
                  </p>
                  <img src={gif} alt="" className="h-28 xxxsm:hidden" />
                </div>
              </Link>
              <a href="#">
                <div className="flex">
                  <p className="mt-5 font-poppins text-sm uppercase tracking-wide xxsm:text-xs">
                    <span className="xxsm:hidden">Look at my</span> resume
                  </p>
                  <VscLinkExternal
                    size={25}
                    className="ml-3 mt-3 xxxsm:hidden"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-36 flex flex-1 items-start justify-end md:order-1 md:mx-0 md:mt-0  md:flex-none md:items-start md:justify-center">
            <img
              src={mainpic}
              alt="mypic"
              className={`${hover.mainpic} sm:max-w-[200px] `}
              style={{
                opacity:
                  isHovering || isClicked || isLinkedIn || isGithub ? 0 : 1,
              }}
            />

            <img
              src={jappic}
              alt="jappic"
              className={`${hover.jappic} sm:max-w-[200px] `}
              style={{
                opacity:
                  isHovering || isClicked || isLinkedIn || isGithub ? 1 : 0,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
