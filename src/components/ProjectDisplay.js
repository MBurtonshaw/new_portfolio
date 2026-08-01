import { Link } from "react-router-dom";
import "../styles/projects.css";

const ProjectDisplay = ({ project }) => {
  return (
    <div className="ProjectDisplay">
      <div>
        <h1>{project.title}</h1>
        <h4 className="py-3">{project.description}</h4>
        <div className="button_container">
          <Link className="link_button link_button_1" to="">
            Live Demo
          </Link>
          <Link className="link_button link_button_2" to="">
            Github Repo
          </Link>
        </div>
      </div>

      <hr className="my-5" />

      <div className="project-detail-img">
        <img className="w-100" src={project.img} alt={project.title} />
      </div>

      <p className="project-description fs-5">
        {project.text} {project.text}
      </p>

      <div className="m-3 p-2">
        <h4 className="mt-4">Technologies</h4>
        <div className="technology_list">
          {project.technologies.map((item) => (
            <span key={item} className="technology_tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
