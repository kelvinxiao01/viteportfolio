import "../styles/Experience.css";
import ExperienceBox from "./ExperienceBox";
import CMBPic from "./images/cmblogo.png";
import WyzantPic from "./images/wyzantlogo.png";
import ProjectIcon from "./images/bulb.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experience() {
  return (
    <div id="experience-page">
      <ExperienceBox link="cmb" title="IT/SWE Intern" background={CMBPic} />
      <ExperienceBox
        link="wyzant"
        title="Private Tutor"
        background={WyzantPic}
      />
      {/* <ExperienceBox title="coming soon..." background={ProjectIcon} /> */}
    </div>
  );
}

export default Experience;
