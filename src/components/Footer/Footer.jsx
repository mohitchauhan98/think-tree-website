import "./Footer.css";
import ArcLogo from "../../assets/Arc.png";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-logo">
            <img src={ArcLogo} alt="arclogo" />
            <span>A Gateway to your future</span>
          </div>
          <div className="navb">
            <a href="#story">Our Story</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-connect">
            <div>
              <span>Stay Connected</span>
            </div>
            <div className="icons-footer">
              <span className="facebook">
                <FaFacebook />
              </span>
              <span className="facebook">
                <FaSquareXTwitter />
              </span>
              <span className="facebook">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-border"></div>
        <div className="footer-last">
          <div className="footer-last-left">
            <div className="footer-details">
              <span>
                <MdEmail />
              </span>
              <span>hello@arcconstructions.com</span>
            </div>
            <div className="footer-details">
              <span>
                <IoMdCall />
              </span>
              <span>+91 918324567</span>
            </div>
            <div className="footer-details">
              <span>
                <IoLocationSharp />
              </span>
              <span>Location</span>
            </div>
          </div>
          <div className="footer-right">
            <span>© 2024 ARC Constrtuctions. All rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
