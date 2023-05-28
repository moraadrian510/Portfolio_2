import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
       <hr className="footer-line" />
      <div className="center-icons">
        <a
          className="footer-link"
          href="https://github.com/moraadrian510"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/adrian-mora-85a441233/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="footer-link"
          href="mailto:moraadrian510@icloud.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <hr className="footer-line" />
    </footer>
  );
}

export default Footer;
