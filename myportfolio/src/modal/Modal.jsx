import BackDrop from "../backdrop/BackDrop";
import NavItems from "../components/NavItems";



const Modal = ({setNav, setOpen}) => {
  const closeModal = () => {
    setNav(false);
    setOpen(false);
  }
 

  return (
    <div className="md:flex justify-end hidden">
      <BackDrop closeModal={closeModal} />
      <nav className="z-[2] absolute w-[75%] max-w-[62rem] h-[100vh] bg-[#fff] top-0 flex justify-center items-center">
        <ul className="md:flex flex-col items-center gap-5 font-terex text-2xl tracking-wider hidden uppercase">
          <NavItems closeModal={closeModal} />
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
