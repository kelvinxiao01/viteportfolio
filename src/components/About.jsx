import "../styles/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KelvinImg from "./images/IMG_4507.jpg";
import Navigation from "./Navigation";

function About() {
  return (
    <div id="about-page">
      {/* <Navigation /> */}
      <div className="main-content">
        {/* <h1>So, who am I?</h1> */}
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <img src={KelvinImg} alt="" className="img" />
            </Col>
            <Col className="desc-col">
              <Container>
                <Row>
                  <Col sm={12} md={6}>
                    <p>Name: Kelvin Xiao</p>
                    <p>Occupation: Developer</p>
                  </Col>
                  <Col>
                    <p>Hobbies: Lifting, Reading, Teamfight Tactics</p>
                    <p>Favorite Food: Hotpot</p>
                  </Col>
                </Row>
              </Container>
              <p>
                Hello internet surfer, welcome to my page. My name is Kelvin
                Xiao, and I am a recent graduate of New York University double
                majoring in mathematics and economics.
              </p>
              <p>
                I am currently an IT/Software Engineering intern at China
                Merchants Bank. However, I am always looking out for new
                opportunities!
              </p>
              <p>
                In my free time you can find me venturing into the world of web
                development, at the gym, or just reading a good book.
              </p>
              <p>
                Curious about my past experience? You can check it out on the
                left side! You can connect with me through my links:
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
