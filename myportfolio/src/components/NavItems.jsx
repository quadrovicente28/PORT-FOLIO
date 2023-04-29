import { Link } from 'react-scroll'

const NavItems = ({ closeModal }) => {
  return (
    <>
      <li>
        <Link to="projects" spy={true} smooth={true} offset={1} duration={500} onClick={closeModal}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={1} duration={500} onClick={closeModal}>
          About
        </Link>
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
