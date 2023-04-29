import SectionTitle from "../reusable component/SectionTitle";

const About = () => {
  return (
    <>
      <div id="about" className="mb-20"></div>
      <div className="mx-auto grid h-screen max-w-[62rem] px-5 md:mx-5 sm:px-3 block">
        <SectionTitle>About</SectionTitle>
      </div>
    </>
  );
};

export default About;
