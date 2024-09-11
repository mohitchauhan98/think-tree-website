import React from "react";
import "./About.css";
import { GoArrowUpRight } from "react-icons/go";
import HomeLogo from "../../assets/Home.png";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about">
          <div className="about-left">
            <h4>About us</h4>
            <h1>
              Building dreams, <br />
              brick by brick, since the 1960s.
            </h1>
            <p>
              Since the 1960s, we've been building in Bengaluru, starting with
              handmade bricks and tiles. Today, we construct everything from
              cosy homes to busy business centres using steel and glass. We're a
              dedicated and family-oriented team, using the latest tools while
              staying true to our roots.
            </p>
            <button className="about-left-button">
              Know More{" "}
              <span>
                <GoArrowUpRight />
              </span>
            </button>
          </div>
          <div className="about-right">
            <div className="about-image-section">
              <img className="image-wrap" src={HomeLogo} alt="images" />
            </div>
            <div className="image-section-two">
              <img className="image-wrap" src={HomeLogo} alt="images" />
            </div>
            <div className="image-section-three">
              <img className="image-wrap" src={HomeLogo} alt="images" />
            </div>
            <div className="image-section-four">
              <img className="image-wrap" src={HomeLogo} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
