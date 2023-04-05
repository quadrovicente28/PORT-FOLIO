import mainpic from "../assets/Me.jpg";
import jappic from "../assets/Japanese1.jpg";
import sword from '../assets/sword.png';
import sheath from '../assets/sheath.png'
import hover from '../styles/hover.module.css'

const HeroSection = () => {

  const JappicHover = () => {
    document.querySelector(".mainpic").style.opacity = 0;
  };

  const JappicOut = () => {
    document.querySelector(".mainpic").style.opacity = 1;
  };

  return (
    <section
      id="herosection"
      className="flex max-w-[62rem] px-5 sm:px-3 md:mx-5 min-h-[100vh] mx-auto"
    >
      <div className="flex w-[100%] md:flex-col">
        <div className="flex flex-1 flex-col justify-center items-center md:flex-none">
          <h1 className="font-shuriken tracking-wide text-4xl md:text-2xl xmd:text-3xl uppercase py-2 md:flex-0">
            Hello, I'm Joshua
          </h1>
          <p className="font-poppins capitalize text-2xl md:text-xl">
            A junior web developer
          </p>
          <div className="flex flex-col items-center md:hidden">
            <img src={sword} alt="sword" className={`flex items-center justify-center w-[300px] mt-5 transition-transform`}/>
            <img src={sheath} alt="sword" className={`absolute flex items-center justify-center w-[300px] mt-5 `} />
          </div>
        </div>
        <div className="flex flex-1 justify-end bg-red-400 items-center md:justify-center md:flex-1">
          <img
            src={mainpic}
            alt="mypic"
            className={`${hover.mainpic} mainpic`}
          />
          <img
            src={jappic}
            alt="jappic"
            className={`${hover.jappic}`}
            onMouseOver={JappicHover}
            onMouseOut={JappicOut}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
