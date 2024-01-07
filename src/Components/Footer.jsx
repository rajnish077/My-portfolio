import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon  from "@material-ui/icons/Email";

import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <EmailIcon/>
      </div>
      <p> &copy; 2024 My-Portfolio</p>
    </div>
  );
};

export default Footer;
