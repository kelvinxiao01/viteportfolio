import "../styles/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KelvinImg from "./images/IMG_4507.jpg";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div id="about-page">
      {/* <Navigation /> */}
      <div className="main-content">
        {/* <h1>So, who am I?</h1> */}
        <Container>
          <Row>
            <Col sm={12} md={4}>
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
              <p className="text-indent">
                Greetings internet surfer. Welcome! I am a proud alumnus of New
                York University, where I honed my analytical skills with a dual
                focus in Mathematics and Economics. This unique blend of
                quantitative rigor and economic understanding has been the
                cornerstone of my approach to problem-solving in the tech world.
                Currently, I am channeling my passion for technology into a
                dynamic role in IT at China Merchants Bank. As a specialist in
                software engineering, I bring a comprehensive skill set in
                full-stack and mobile development. My journey so far has been
                about bridging the gap between sophisticated technical solutions
                and real-world economic challenges, ensuring that every project
                I undertake is not just technically sound, but also economically
                viable and user-centric. This portfolio is a window into my
                professional journey, showcasing projects that reflect my
                commitment to excellence, innovation, and the continuous pursuit
                of learning in the ever-evolving realm of technology. Curious
                about me? you can learn more about my past experience down
                below!
              </p>

              <p className="text-indent"></p>
              <a
                href="https://www.linkedin.com/in/kelvin-xiao-a5a473179/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-brands fa-linkedin"
                />
              </a>
              <a href="https://github.com/kelvinxiao01" target="_blank">
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-brands fa-square-github"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
