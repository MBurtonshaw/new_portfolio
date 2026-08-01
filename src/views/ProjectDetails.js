import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProjectDisplay from '../components/ProjectDisplay';

const ProjectDetails = ({projects}) => {
    const {id} = useParams();
    //compare id to id in json file to match project
    const project = projects.find(
        project => project.id === Number(id)
    );

  return (
    <div className="">
      <Sidebar />
      <ProjectDisplay project={project}/>
    </div>
  );
};

export default ProjectDetails;
