import React from "react";

function Resume() {
  return (
    <div className="outter-layer">
    <div className="resume">
      <h2 className="adrian">Adrian Mora</h2>
      <p className="location">Antioch, California, United States</p>
      <a className="linkedin" href="mailto:moraadrian510@icloud.com">moraadrian510@icloud.com.com</a>
      <p className="linkedin">
        <a className="linkedin" href="https://www.linkedin.com/in/adrian-mora-85a441233/">linkedin.com/in/adrian-mora-85a441233</a>
      </p>
      <h3 className="highlight">Summary</h3>
      <p>
        Attended a full-stack boot camp and self-studied before that. Currently building a project website for a friend.
      </p>
      <h3 className="highlight">Experience</h3>
      <ul className="experience">
        <li>
          <p className="position">Self-employed</p>
          <p className="dates">Jan 2020 - Present (3 years 4 months)</p>
          <p className="description">Started working on client websites, including one for a friend's podcast.</p>
        </li>
      </ul>
      <h3 className="highlight">Skills</h3>
      <ul className="skills">
        <li>React.js</li>
        <li>SQL</li>
        <li>HTML5</li>
        <li>Bootstrap</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Sequelize.js</li>
        <li>Git</li>
      </ul>
      <h3 className="highlight">Career Highlights</h3>
      <p className="highlight">
        <a  className="linkedin" href="https://github.com/moraadrian510">https://github.com/moraadrian510</a>
      </p>
      <p className="#">Able to work effectively in group or solo settings</p>
      <p className="#">Passionate about coding and constantly learning to improve skills</p>
      <h3 className="highlight">Education</h3>
      <p>UC Berkeley Extension - Full stack web development (Nov 2022 - Jul 2023)</p>
      <h3 className="highlight">Licenses &amp; Certifications</h3>
      <ul>
        <li>Responsive Web Design - freeCodeCamp</li>
        <li>Responsive Web Design - freeCodeCamp</li>
      </ul>
      <div className="resume-download">
        <p>Download my resume:</p>
        <a className="linkedin" href="/path/to/resume.pdf" download>Download Resume </a>
      </div>
    </div>
    </div>
  );
}

export default Resume;
