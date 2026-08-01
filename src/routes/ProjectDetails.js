import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const {id} = useParams();
    //compare id to id in json file to match project

  return (
    <div className="Project">
      <h1>{`Project ${id}`}</h1>
      {/* <h1>{${project.title}}</h1> */}
    </div>
  );
};

export default ProjectDetails;
