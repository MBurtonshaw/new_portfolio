import './styles/App.css';
import Home from './routes/Home';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './routes/ProjectDetails';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
