import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const proList = projects.map((pro) => {
    return <ProjectItem key = {pro.id} name = {pro.name} about = {pro.about} technologies = {pro.technologies}/>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {proList}
      </div>
    </div>
  );
}

export default ProjectList;
