import React from "react";
import Projectitem from "../Components/Projectitem";
import "../Styles/Project.css";
import { ProjectList } from "../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h2> My Personal Projects </h2>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <Projectitem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
