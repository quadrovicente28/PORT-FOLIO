import React from "react";
import SectionTitle from "../reusable component/SectionTitle";
import ProjectItem from "./ProjectItem";
import projects from "../data/projects";

const Projects = () => {
  return (
    <>
      <div id="projects" className="mb-20"></div>
      <div className="h-screen grid max-w-[62rem] px-5 sm:px-3 md:mx-5 mx-auto ">
        
          <SectionTitle>Projects</SectionTitle>
        
        <div className="grid grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              imgUrl={project.imgUrl}
              title={project.title}
              tech={project.tech}
              projUrl={project.projUrl}
            ></ProjectItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
