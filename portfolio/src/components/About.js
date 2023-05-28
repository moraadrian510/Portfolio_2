import React from "react";
import myImage from '../images/me.png';

function About() {
  return (
    <div>
      <div className="about-parent">
        <div className="aboutMe" >About Me</div>
        <img className="myImage" src={myImage} alt="profile" />
        <p className="about-text">
          As someone who has always been fascinated by how things work, I decided
          to pursue a career in software development. I am currently new to the
          field and am eager to continue learning and improving my skills. Some of
          the technologies I have experience with include <span className="highlight">React.js, SQL, HTML5,
          Bootstrap, CSS, JavaScript, Node.js, Express.js, React</span> and <span className="highlight">Sequelize</span>. I am
          based in the Bay Area, a region that is renowned for its innovation and
          forward-thinking mentality. Being part of this community has inspired me
          to strive for excellence and push myself to new heights. In my free
          time, I enjoy reading about new technologies, attending tech meetups,
          and experimenting with personal coding projects. I am excited about the
          potential of technology to positively impact our world and am eager to
          contribute to the industry in any way I can. Thank you for the
          opportunity to share a little about myself, and I look forward to
          connecting with other professionals in the field.
        </p>
      </div>
    </div>
  );
  
}

export default About;
