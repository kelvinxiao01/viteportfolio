import "../../styles/CmbExperience.css";
import Navigation from "../Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CMBExperience() {
  return (
    <div className="cmbExperience">
      <Navigation />
      <div className="main-content">
        <Container>
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
            As an IT intern my primary responsibilities included developing and
            maintaining internal infrastructure. Some projects I worked on
            include code migration and script automation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CMBExperience;
