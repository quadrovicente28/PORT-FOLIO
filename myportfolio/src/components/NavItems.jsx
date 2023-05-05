import { Link } from "react-scroll";
const NavItems = ({ closeModal }) => {

 

  return (
    <>
      <li className=" hover:text-red-600 transition duration-100 active:text-red-700">
        <Link
          to="hero"
          offset={-100}
          smooth={true}
          duration={500}
          onClick={closeModal}
          className="cursor-katana text-center"
        >
          Home
        </Link>
      </li>
      <li className=" hover:text-red-600 transition duration-100 active:text-red-700">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={closeModal}
          className="cursor-katana text-center"
        >
          Projects
        </Link>
      </li>
      <li className="hover:text-red-600 transition duration-100 active:text-red-700">
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={closeModal}
          className="cursor-katana text-center"
        >
          About
        </Link>
      </li>
      <li className="hover:text-red-600 transition duration-100 active:text-red-700">
        <a href="#contact" className="cursor-katana" onClick={closeModal}>
          Contact
        </a>
      </li>
    </>
  );
};

export default NavItems;
