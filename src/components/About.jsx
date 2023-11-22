import "../styles/About.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KelvinImg from "./images/IMG_4507.jpg";

function About() {
  return (
    <div id="about-page">
      <Container fluid>
        <h1>So, who am I?</h1>
        <Row>
          <Col>
            <img src={KelvinImg} alt="" className="img" />
          </Col>
          <Col>
            Hi, my name is Kelvin Xiao, and I am an aspriring developer. I have
            experience with a variety of technologies, such as full stack and
            mobile development.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
