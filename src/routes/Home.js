import Sidebar from '../components/Sidebar';
import ProjectContainer from '../components/ProjectContainer';
import projects from '../json/projects.json';

const Home = () => {
  return (
    <div className="Home min-vh-100">
      <Sidebar />
      <ProjectContainer projects={projects}/>
    </div>
  );
};

export default Home;
