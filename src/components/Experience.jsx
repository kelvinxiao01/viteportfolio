import "../styles/Experience.css";
import ExperienceBox from "./ExperienceBox";
import CMBPic from "./images/cmblogo.png";
import WyzantPic from "./images/wyzantlogo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experience() {
  return (
    <div id="experience-page">
      <ExperienceBox
        link="cmb"
        title="IT/SWE Intern"
        desc="I am a an IT and Software Dev Intern at China Merchants Bank"
        background={CMBPic}
      />
      <ExperienceBox
        link="wyzant"
        title="Private Tutor"
        desc="I was an SAT Tutor at Wyzant"
        background={WyzantPic}
      />
    </div>
  );
}

export default Experience;
