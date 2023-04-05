import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import NavItems from "./NavItems";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Modal from "../modal/Modal";
import { useMediaQuery } from "@react-hook/media-query";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setOpen(!isOpen);
  };
  const aboveMd = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    setNav(!aboveMd);
    setOpen(!aboveMd);
  }, [aboveMd]);

  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join("");
  }

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? "shadow " : "shadow-none ",
        "transition-shadow sticky top-0 bg-[#ffffff] block"
      )}
    >
      <header className="flex max-w-[62rem] px-5 sm:px-3 h-16 mx-auto justify-between items-center">
        <a aria-label="logo" href="/">
          <h1 className="font-shuriken tracking-wide uppercase cursor-pointer rounded-md text-2xl md:px-5 md:text-xl">
            joshua betco
          </h1>
        </a>
        <nav className="md:flex hidden md-1 z-[3]">
          <Hamburger
            toggled={isOpen}
            onToggle={handleNav}
            size={28}
            direction="right"
          />
        </nav>

        <nav className="md:hidden">
          <ul className="flex justify-center items-center gap-5 font-terex tracking-widest text-xl uppercase">
            <NavItems />
          </ul>
        </nav>
      </header>
      {nav ? <Modal setNav={setNav} setOpen={setOpen} /> : ""}
    </div>
  );
};

export default NavBar;
