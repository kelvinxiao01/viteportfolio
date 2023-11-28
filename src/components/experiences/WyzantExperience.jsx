import "../../styles/WyzantExperience.css";
import Navigation from "../Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TutorCard from "../images/tutorcard.jpeg";
import Reviews1 from "../images/tutorreviews1.jpeg";
import Reviews2 from "../images/tutorreviews2.jpeg";
import { Link } from "react-router-dom";

function WyzantExperience() {
  return (
    <div className="wyzantExperience">
      <Navigation />
      <div className="main-content">
        <Container>
          <Row>
            <Col>
              <ul>
                <li>Private Tutor</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Dec 2019 - Dec 2022</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="wyzant-desc">
          <p>
            I specialized in SAT tutoring, however I also have a lot of
            experience in tutoring math subjects, such as algebra, geometry, and
            calculus. You can find me profile
            <a href="https://www.wyzant.com/Tutors/Kelvin0510"> here</a>.
          </p>
          <p>
            I achieved and maintained a 5-star rating. Look below to see what
            people had to say about me
          </p>
          <Link to="/">Click here to return to homepage</Link>
        </div>
        <div className="wyzant-pics">
          <img src={TutorCard} alt="" />
          <img src={Reviews1} alt="" />
          <img src={Reviews2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WyzantExperience;
