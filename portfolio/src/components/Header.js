import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import '../index.css';

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      case "Projects":
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <div>
        <div className="headerBody">
                <div className="adrian">Adrian Mora</div>
            <nav className="navbar"></nav>
            <button className='button' onClick={() => setCurrentPage("About")}>About Me</button>
            <button className='button' onClick={() => setCurrentPage("Projects")}>Projects</button>
            <button className='button' onClick={() => setCurrentPage("Resume")}>Resume</button>
            <button className='button' onClick={() => setCurrentPage("Contact")}>Contact</button>
        </div>
        <main>
            {renderPage()}
        </main>
    </div>
  );
}

export default Header;
