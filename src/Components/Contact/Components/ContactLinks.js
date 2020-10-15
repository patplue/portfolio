import React from "react";
import "./ContactLinks.css";
import gh from "../../../Pictures/gh.png";
import li from "../../../Pictures/li.png";

const ContactLinks = () => {
  return (
    <div className="contact-links-container">
      <p>
        Or just reach out to me on{" "}
        <a
          href="https://www.linkedin.com/in/patrick-plue-320395136/"
          target="_blank"
          className="highlight"
          rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        or look at my work on{" "}
        <a
          href="https://github.com/patplue"
          target="_blank"
          className="highlight"
          rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
      <a
        href="https://www.linkedin.com/in/patrick-plue-320395136/"
        target="_blank"
        rel="noopener noreferrer">
        <img src={li} alt="linkedIn logo" className="li-logo logo-link" />
      </a>
      <a
        href="https://github.com/patplue"
        target="_blank"
        rel="noopener noreferrer">
        <img src={gh} alt="github logo" className="gh-logo logo-link" />
      </a>
    </div>
  );
};

export default ContactLinks;
