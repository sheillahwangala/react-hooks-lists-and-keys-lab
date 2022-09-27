import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesList = technologies.map((tech) => {
    return (
      <span key={tech}>{tech}</span>
    )
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
     {/* render a <span> for each technology in the technologies array  */}
      <div className="technologies">{technologiesList}</div>
    </div>
  );
}

export default ProjectItem;
