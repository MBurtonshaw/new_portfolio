import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './views/Home';
import ProjectDetails from './views/ProjectDetails';
import About from './views/About';
import ScrollToTop from './functions/ScrollToTop';
import projects from './json/projects.json';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes >
        <Route path="/" element={<Home projects={projects}/>} />
        <Route path="/about" element={<About projects={projects}/>} />
        <Route path="/projects/:id" element={<ProjectDetails projects={projects}/>} />
      </Routes>
    </div>
  );
}

export default App;
