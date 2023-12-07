import "../../styles/CmbExperience.css";
import Navigation from "../Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ReturnToHome from "../ReturnToHome";
import ExperienceBox from "../ExperienceBox";
import SpringbootPic from "../images/springtransparent.png";
import WorldCheckPic from "../images/worldcheck.png";

function CMBExperience() {
  return (
    <div className="cmbExperience">
      {/* <Navigation /> */}
      <div className="main-content">
        <Container className="cmb-context">
          <Row>
            <Col>
              <ul>
                <li>IT/Software Development Intern</li>
                <li>
                  Relevant Technology Used: Java, Spring Boot, Python, SQL,
                  HTML, CSS, Javascript
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Oct 2023 - Present</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="cmb-desc">
          <p>
            My primary responsibilities entail creating and maintaining internal
            IT infrastructure. Look below to see what I have worked on.
          </p>
          <ReturnToHome />
          <div className="cmb-projects">
            <Container>
              <Row className="cmb-projects-row">
                <Col md={4}>
                  <img src={SpringbootPic} alt="" />
                </Col>
                <Col className="cmb-projects-desc" md={8}>
                  In this project, a legacy Spring application was transitioned
                  to a modern Spring Boot framework, representing a significant
                  update and architectural redesign to leverage the advanced
                  features of Spring Boot. A key component of this
                  transformation was the integration of MyBatis, a sophisticated
                  persistence framework, which optimized the application's
                  database interactions for improved performance and
                  maintainability. The project encompassed full-stack
                  development aspects, ensuring seamless synergy among all
                  application components. This resulted in a robust, efficient,
                  and scalable system. The successful migration to Spring Boot
                  with MyBatis integration illustrates a commitment to embracing
                  contemporary technologies for enhanced business efficiency and
                  innovation.
                </Col>
              </Row>
              <Row className="cmb-projects-row">
                <Col className="cmb-projects-desc" md={8}>
                  Creating an automated solution for case screenings, I
                  developed a Python script that integrates with the London
                  Stock Exchange Group's (LSEG) World-Check API. This innovative
                  tool streamlines the process of identifying and analyzing
                  individuals and organizations in relation to financial crime,
                  regulatory, and reputational risks. By leveraging the
                  extensive database of LSEG World-Check, the script efficiently
                  scans and cross-references data, providing quick and reliable
                  results. This automation significantly enhances due diligence
                  processes, reduces manual workload, and ensures compliance
                  with global regulatory standards. The script's intuitive
                  design and robust functionality make it an invaluable asset
                  for organizations seeking to fortify their risk management
                  strategies.
                </Col>
                <Col md={4}>
                  <img src={WorldCheckPic} alt="" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CMBExperience;
