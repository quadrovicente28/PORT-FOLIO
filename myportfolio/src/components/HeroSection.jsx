import mainpic from "../assets/Me.jpg";
import jappic from "../assets/Japanese1.jpg";
import sword from "../assets/sword.png";
import sheath from "../assets/sheath.png";
import hover from "../styles/hover.module.css";
import { useState } from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const HeroSection = ({nav}) => {
  const [isImageHidden, setIsImageHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };

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
            {!nav ?
            (<motion.img
              animate={{
                x:
                  (isHovering && isClicked) || (!isHovering && isClicked)
                    ? [0, 66, 200, 150]
                    : isHovering
                    ? 5
                    : 0,
                rotate: isClicked ? [0, -5, 90, -100] : 0,
              }}
              transition={{
                x: isClicked ? { duration: 1} : { duration: 0.1 },
                rotate: {delay: .2, duration: 1.8, ease:[0.1, .22, .22, .1] },
              }}
              src={sword}
              alt="sword"
              className={`flex items-center justify-center w-[300px] mt-5 transition-transform`}
            />) : (<motion.img
              animate={{
                x:
                  (isHovering && isClicked) || (!isHovering && isClicked)
                    ? [0, 66, 200, 150]
                    : isHovering
                    ? 5
                    : 0,
                rotate: isClicked ? [0, -5, 90, -100] : 0,
              }}
              transition={{
                x: isClicked ? { duration: 1} : { duration: 0.1 },
                rotate: {delay: .2, duration: 1.8, ease:[0.1, .22, .22, .1] },
              }}
              src={sword}
              alt="sword"
              className={`hidden`}
            />) }
            {!nav ?
            (<motion.img
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
              className={`absolute flex items-center justify-center w-[300px] mt-5`}
            />) : (<motion.img
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
              className="hidden"
            />) }
          </div>
          <div className="flex py-2">
            <motion.a
              href="#"
              whileHover={{
                scale: 1.2,
                transition: { duration: .5 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineGithub
                onClick={handleClick}
                onMouseOver={() => {
                  setIsHovering(isClicked ? false : true);
                }}
                onMouseOut={() => {
                  setIsHovering(false);
                }}
                className="mx-10"
                size={"38px"}
              />
            </motion.a>
            <motion.a href="#"
             whileHover={{
              scale: 1.2,
              transition: { duration: .5 },
            }}
            whileTap={{ scale: 0.9 }}>
              <AiFillLinkedin
                onClick={handleClick}
                onMouseOver={() => {
                  setIsHovering(isClicked ? false : true);
                }}
                onMouseOut={() => {
                  setIsHovering(false);
                }}
                className="mx-10"
                size={"38px"}
              />
            </motion.a>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center mr-7 md:justify-center md:mx-0  md:order-1 md:items-start md:mb-20 md:flex-none">
          <img
            src={mainpic}
            alt="mypic"
            className={`${hover.mainpic} mainpic`}
            style={{ opacity: isImageHidden ? 0 : 1 }}
          />
          {!nav ? 
          (<img
            src={jappic}
            alt="jappic"
            className={`${hover.jappic}`}
            onMouseOver={() => setIsImageHidden(true)}
            onMouseOut={() => setIsImageHidden(false)}
          />) : (<img
            src={jappic}
            alt="jappic"
            className={`${hover.jappic} hidden`}
            onMouseOver={() => setIsImageHidden(true)}
            onMouseOut={() => setIsImageHidden(false)}
          />)}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
