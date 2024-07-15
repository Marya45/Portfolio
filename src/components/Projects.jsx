import React from "react";
import { useState } from "react";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";
import project5 from "../img/project5.png";
import project6 from "../img/project6.png";

function Projects() {
  const [projects] = useState([
    {
      title: "Chat-Connect",
      img: project1,
      gLink: "https://github.com/Marya45/Chat-app",
      lLink: "https://chat-app-rohan.netlify.app/",
    },
    {
      title: "NewsWave",
      img: project2,
      gLink: "https://github.com/Marya45/NEWSAPP",
      lLink: "https://drive.google.com/file/d/1VkdcwRt9ZIvJdIvd2_ERSVuoWqLmgjz-/view?usp=sharing",
    },
    {
      title: "CPU Scheduler",
      img: project3,
      gLink: "https://github.com/Marya45/CPU-SCHEDULER",
      lLink: "https://marya45.github.io/CPU-SCHEDULER",
    },
    {
      title: "iNotebook",
      img: project5,
      gLink: "https://github.com/Marya45/iNotebook-React",
      lLink: "https://inotebook-91ta.onrender.com",
    },
    {
      title: "Spotify-Clone",
      img: project6,
      gLink: "https://github.com/Marya45/Spotify-Clone-using-HTML-CSS-JS",
      lLink: "https://marya45.github.io/Spotify-Clone-using-HTML-CSS-JS",
    },
    {
      title: "Text Utils",
      img: project4,
      gLink: "https://github.com/Marya45/Textutils",
      lLink: "https://text-utils45.netlify.app",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Projects</h3>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
