import { Link } from "react-router-dom";
import "../styles/projects.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="py-3">
      <Link
        className="project black_link card"
        to={`/projects/${project.id}`}
      >
        <div className="card-body p-4">
          <h3 className="card-title mb-4">{project.title}</h3>

          <img
            className="project-image"
            src={project.img}
            alt={`project ${project.id} thumbnail`}
          />

          <p className="fs-5 px-1">{project.summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
