import React from "react";
import ArcLogo from "../../../assets/Arc.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <div className="logo">
          <img src={ArcLogo} alt="arclogo" />
          <span>A Gateway to your future</span>
        </div>
        <div className="nav">
          <a href="#story">Our Story</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-button">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
