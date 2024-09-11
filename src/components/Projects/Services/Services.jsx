import "./Services.css";
import { MdForest } from "react-icons/md";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { BiSolidShoppingBag } from "react-icons/bi";
import { BsHousesFill } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

const servicesData = [
  { icon: <MdForest />, title: "Land Banking" },
  { icon: <PiBuildingOfficeFill />, title: "Industrial Parks" },
  { icon: <BiSolidShoppingBag />, title: "Business Parks" },
  { icon: <BsHousesFill />, title: "Residential Spaces" },
];

const Services = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="service-header">Our Services</h1>
          <p className="para">
            Arc Constructions offers a helping hand to businesses and
            individuals alike, turning visions into thriving spaces.
          </p>
        </div>
        <div className="service-handle">
          <div className="residential">
            <span>Residential</span>
          </div>
          <div className="residential construction">
            <span>Construction</span>
          </div>
        </div>
        <div className="cards">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <span>{service.icon}</span>
              <p>{service.title}</p>
            </div>
          ))}
        </div>
        <div>
        <button className="about-left-button">
              Know More
              <span>
                <GoArrowUpRight />
              </span>
            </button>
        </div>
      </div>
    </>
  );
};

export default Services;