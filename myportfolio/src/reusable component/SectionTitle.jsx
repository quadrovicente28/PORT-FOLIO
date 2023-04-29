import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div>
      <h1 className="font-shuriken text-3xl uppercase tracking-wider xmd:text-3xl md:text-2xl  xxxsm:text-xl ">
        {children}
      </h1>
      <hr />
    </div>
  );
};

export default SectionTitle;
