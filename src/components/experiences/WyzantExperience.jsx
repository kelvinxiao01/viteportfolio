import "../../styles/WyzantExperience.css";
import Navigation from "../Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TutorCard from "../images/tutorcard.jpeg";
import Reviews1 from "../images/tutorreviews1.jpeg";
import Reviews2 from "../images/tutorreviews2.jpeg";
import { Link } from "react-router-dom";
import ReturnToHome from "../ReturnToHome";

function WyzantExperience() {
  return (
    <div className="wyzantExperience">
      {/* <Navigation /> */}
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
            As a private SAT tutor on Wyzant, I have earned and maintained a
            5-star rating through my commitment to excellence in teaching. My
            approach to tutoring is highly personalized, as I strive to adapt to
            the unique needs and learning styles of each of my students. I
            possess a deep understanding of the SAT material, and I excel at
            breaking down complex concepts into simpler, more digestible parts.
            This makes the content more accessible and less intimidating for my
            students. My patience and encouragement are key aspects of my
            teaching style, and they have been instrumental in boosting my
            students' confidence. This, in turn, is often reflected in their
            improved test scores. Beyond academic instruction, I offer valuable
            test-taking strategies and time management tips, which help my
            students maximize their performance on the SAT. The glowing reviews
            and consistent high ratings I receive are a testament to my
            dedication to my students' success, making me a highly respected and
            sought-after tutor on Wyzant.
          </p>
          <p>
            You can find my profile
            <a href="https://www.wyzant.com/Tutors/Kelvin0510"> here</a>.
          </p>
          <ReturnToHome />
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
