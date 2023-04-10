import React from "react";
import { motion } from "framer-motion";

const DelayedLinks = (props) => {
  const { to, delay, children, setIsHovering, isClicked } = props;


  const handleClick = (event) => {
    event.preventDefault();
    setTimeout(() => {
      window.open(to, "_blank");
    }, delay);
  };

  return (
    <motion.a
      href={to}
      onClick={handleClick}
      style={{ pointerEvents: "none" }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      onMouseOver={() => {
        setIsHovering(isClicked ? false : true);
      }}
      onMouseOut={() => {
        setIsHovering(false);
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

export default DelayedLinks;
