import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import NavItems from "./NavItems";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Modal from "../modal/Modal";
import { useState } from "react";

const NavBar = ({ nav, setNav, belowMd }) => {
  const [isOpen, setOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setOpen(!isOpen);
  };

  useEffect(() => {
    setNav(!belowMd);
    setOpen(!belowMd);
  }, [belowMd]);

  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join("");
  }

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? "shadow " : "shadow-none ",
        "sticky top-0 z-[999] block bg-[#ffffff] bg-samurai bg-cover transition-shadow"
      )}
    >
      <header className="mx-auto flex h-14 max-w-[62rem] items-center justify-between px-5 sm:px-3">
        <a
          href="/"
          aria-label="logo"
          className="hover:text-red-600 transition duration-100 active:text-red-700"
        >
          <h1 className="cursor-pointer rounded-md font-shuriken text-2xl uppercase tracking-wide md:px-5 md:text-xl">
            joshua betco
          </h1>
        </a>
        <nav className="md-1 z-[3] hidden md:flex">
          <Hamburger toggled={isOpen} onToggle={handleNav} size={28} />
        </nav>

        <nav className="md:hidden">
          <ul className="flex items-center justify-center gap-5 font-shuriken text-sm uppercase tracking-widest">
            <NavItems />
          </ul>
        </nav>
      </header>
      {nav ? <Modal setNav={setNav} setOpen={setOpen} /> : ""}
    </div>
  );
};

export default NavBar;
