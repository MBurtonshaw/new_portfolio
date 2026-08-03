import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="portrait_container">
        <Link to="/">
          <img
            className="w-100 m-auto"
            src="/img/ProfilePhoto2.jpg"
            alt="Matthew Burtonshaw portrait"
          />
        </Link>
      </div>
      <h1 className="sidebar_name">
        Matthew <br></br> Burtonshaw
      </h1>
      <h4 className="mt-4 p-1">Junior Software Developer</h4>
      <br />
      <div>
        <Link className="white_link" to="/">
          <h4 className="mt-4 py-2">Home</h4>
        </Link>
        <Link className="white_link" to="/about">
          <h4 className="py-2">About</h4>
        </Link>
      </div>
      <div className="mt-5">
        <a
          className="white_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://burtonshawresume.vercel.app/"
        >
          <h4 className="py-2">Resume</h4>
        </a>
        <a
          className="white_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/matthew-burtonshaw/"
        >
          <h4 className="py-2">LinkedIn</h4>
        </a>
        <a
          className="white_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MBurtonshaw"
        >
          <h4 className="py-2">Github</h4>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
