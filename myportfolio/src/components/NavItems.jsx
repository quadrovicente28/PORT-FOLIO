const NavItems = ({ closeModal }) => {
  return (
    <>
      <li>
        <a href="#projects" onClick={closeModal}>
          Projects
        </a>
      </li>
      <li>
        <a href="#about" onClick={closeModal}>
          About
        </a>
      </li>
      <li>
        <a href="#contact" onClick={closeModal}>
          Contact
        </a>
      </li>
      <li>
        <a href="#resume" onClick={closeModal}>
          Resume
        </a>
      </li>
    </>
  );
};

export default NavItems;
