import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'am Rajnish Bhargav</h2>
        <div className="prompt">
          <p>
            A Software developer with a passion for learning and creating
            websites.
          </p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, ReactJS, Bootstrap, MaterialUI </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C/C++,Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
