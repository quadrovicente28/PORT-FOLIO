const BackDrop = ({ closeModal }) => {
  return (
    <div
      onClick={closeModal}
      className="absolute left-0 top-0 w-[100%] h-[100vh] bg-[#00000080] z-[1]"
    ></div>
  );
};

export default BackDrop;
