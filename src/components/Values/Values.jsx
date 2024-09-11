import "./Values.css";
import { RiThumbUpFill } from "react-icons/ri";
import { TbBulbFilled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";
import { BsTransparency } from "react-icons/bs";
import Form from "./Form/Form";
import Contact from "./Contact/Contact";

const coreValuesData = [
  {
    icon: <RiThumbUpFill />,
    title: "Committed",
    description:
      "At Arc Constructions, We Walk The Talk. We Don’t Just Build; We Invest. By Developing Properties Ourselves, We Pour Our Heart And Soul Into Delivering On Time And Within Budget. It’s A Personal Commitment, Etched In Every Brick And Beam.",
  },
  {
    icon: <TbBulbFilled />,
    title: "Inspired",
    description:
      "We Don’t See Empty Lots, We See Possibilities. We’re Not Just Builders, We’re Architects Of Transformation. We Breathe New Life Into Assets, Shape Communities, And Unlock Real Value In Places.",
  },
  {
    icon: <FaUsers />,
    title: "People Centric",
    description:
      "We Build More Than Homes; We Build The Foundation For Thriving Families. It’s Not Just About Walls, It’s About Fostering Communities Where Comfort And Spirit Flourish.",
  },
  {
    icon: <IoTimerSharp />,
    title: "Efficient",
    description:
      "Functionality Isn’t A Burden, It’s Our Artistic Signature. We Craft Spaces With Visual Integrity, Maximizing Every Square Foot Without Sacrificing Aesthetics.",
  },
  {
    icon: <BsTransparency />,
    title: "Transparent",
    description:
      "Honesty Isn’t A Tagline, It’s Our Way Of Life. From Clear Communication To Open Processes, We Believe In Building Trust, Brick By Transparent Brick.",
  },
];

const Values = () => {
  return (
    <>
      <div className="values">
        <div className="core-values-section">
          <div className="value-card">
            <div>
              <h1 className="core-values-heading">
                Core <span>Values</span>
              </h1>
            </div>
          </div>
          <div className="value-card"></div>
          <div className="values-grid">
            {coreValuesData.map((value, index) => (
              <div key={index} className="value-card">
                <div className="card-inner">
                  <div className="icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="form-contact-box">
          <div className="forms">
            <Form />
          </div>
          <div className="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
