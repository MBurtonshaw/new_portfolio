import ProjectCard from "./ProjectCard";

const ProjectContainer = ({projects}) => {

  const project_mapper = () => {
    return projects.map((item) => <ProjectCard key={item.id} project={item} />);
  };

  return (
    <div className="Projects">
      <h1 className="p-2">Projects</h1>
      <div className="container mt-4 w-100 m-auto">
        {project_mapper()}
      </div>
    </div>
  );
};

export default ProjectContainer;
