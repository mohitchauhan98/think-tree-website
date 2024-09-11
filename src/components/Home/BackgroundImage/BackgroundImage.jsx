import React from "react";
import HomeLogo from "../../../assets/Home.png";
import "./BackgroundImage.css";
import { GoArrowUpRight } from "react-icons/go";

const BackgroundImage = () => {
  return (
    <div>
      <div className="hero">
        <div className="blue"></div>
        <div className="home-img">
          <img src={HomeLogo} alt="Building" className="hero-img" />
        </div>
        <div className="overlay">
          <h2>
            <span className="first-line">A gateway to</span>
            <br />
            <span className="second-line">your future</span>
          </h2>
        </div>
        <div className="home-btn">
          <button className="btn">Know more</button>
          <span>
            <GoArrowUpRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
