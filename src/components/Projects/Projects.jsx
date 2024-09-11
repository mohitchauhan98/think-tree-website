import "./Projects.css";
import HomeLogo from "../../assets/Home.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Services from "./Services/Services";

const projectsData = [
  {
    imgSrc: HomeLogo,
    description: "Myntra Warehouse on Soukya Road 2015",
    leasableArea: "Leasable Area: 2 Lac Sq. Ft",
  },
  {
    imgSrc: HomeLogo,
    description: "#6 Primrose, Next to MG Road (2014)",
    leasableArea: "Leasable Area: 3 Lac Sq. Ft",
  },
  {
    imgSrc: HomeLogo,
    description: "Udaan Warehouse on Whitefield Road 2020",
    leasableArea: "Leasable Area:",
  },
];

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div>
          <h1 className="heading">
            Completed <span>Projects</span>
          </h1>
          <p className="para">
            At Arc Constructions, we take pride in our diverse portfolio of
            successfully completed projects. Each venture showcases our
            commitment to quality, innovation, and client satisfaction. Explore
            our past projects to witness the excellence we bring to every
            development.
          </p>
        </div>

        <div className="project-wrapper">
          {projectsData.map((project, index) => (
            <div key={index} className="project-section">
              <img src={project.imgSrc} alt="project logo" />
              <p className="project-section-para">
                {project.description} <span>{project.leasableArea}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="button-wrap">
          <div>
            <button className="about-left-button project-btn">
              View All Property
              <span>
                <GoArrowUpRight />
              </span>
            </button>
          </div>
          <div className="icons-section">
            <span className="arrow-circle"><IoIosArrowRoundBack /></span>
            <span>1/8</span>
            <span className="arrow-circle"><IoIosArrowRoundForward /></span>
          </div>
        </div>

        <div className="services">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Projects;
