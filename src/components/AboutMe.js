import "../styles/projects.css";
import "../styles/about.css";
import info from "../json/about.json";

const AboutMe = () => {
  const about = info[0];

  return (
    <div className="about_me text-start">
      <h1>{about.title}</h1>
      <div className="">
        {about.intro.map((paragraph, index) => (
          <p key={index} className="p-1">
            {paragraph}
          </p>
        ))}
      </div>
      <hr className="my-4" />
      <div className="my-3 p-2">
        <h1 className="mt-2 mb-3">Skills</h1>
        {about.skills.map((section) => (
          <div key={section.category}>
            <h5 className="mt-4 pt-2">{section.category}</h5>
            <div className="skill-list">
              {section.items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      <div className="my-4 py-2">
        <h1 className="mb-4">Education & Certifications</h1>
        <p className="my-4 pb-2">
          Completed full-stack development programs focused on Java, JavaScript, web application development, databases, and software engineering practices.
        </p>
        <a
          href={about.links[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="link_button link_button_1 mx-1 mb-4"
        >
          Full Stack Java Certification
        </a>
        <a
          href={about.links[1]}
          target="_blank"
          rel="noopener noreferrer"
          className="link_button link_button_2 mx-4 mb-4"
        >
          Full Stack JavaScript Certification
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
