import Sidebar from '../components/Sidebar';
import ProjectsContainer from '../components/ProjectsContainer';


const Home = ({projects}) => {
  return (
    <div className="Home min-vh-100">
      <Sidebar />
      <ProjectsContainer projects={projects}/>
    </div>
  );
};

export default Home;
