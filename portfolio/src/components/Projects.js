import React from "react";
import project1 from "../images/pswrrd-gen.png";
import project3 from "../images/SLZ-club.png";
import project2 from "../images/jate.png";
import project4 from "../images/Home-page.png";


function Projects() {
  //   const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page

  return (
    <div>
      <div className="projectText-wrap">
      <h2 className="projectText">My Projects</h2>
      </div>
      <div className="project-grid">
          <a href="https://github.com/moraadrian510/pswd-generator">
            <img src= {project1} alt="Project 1" />
          </a>
          <a href="https://github.com/moraadrian510/Scrivo">
            <img src={project2} alt="Project 2" />
          </a>
          <a href="https://moraadrian510.github.io/cocademy-club-website/">
            <img src={project3} alt="Project 3" />
          </a>
          <a href="https://northern-comfort.herokuapp.com/">
            <img src={project4} alt="Project 3" />
          </a>
       
      </div>
  </div>
  );
}

export default Projects;
