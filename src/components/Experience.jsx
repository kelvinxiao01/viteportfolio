import "../styles/Experience.css";
import ExperienceBox from "./ExperienceBox";
import CMBPic from "./images/cmb.jpeg";
import WyzantPic from "./images/wyzant.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experience() {
  return (
    <div id="experience-page">
      <Container>
        <Row>
          <Col>
            <ExperienceBox
              link="cmb"
              title="IT/SWE Intern"
              desc="I am a an IT and Software Dev Intern at China Merchants Bank"
              background={CMBPic}
            />
          </Col>
          <Col>
            <ExperienceBox
              link="wyzant"
              title="Private Tutor"
              desc="I was an SAT Tutor at Wyzant"
              background={WyzantPic}
            />
          </Col>
        </Row>
      </Container>

      {/* <div class="timeline">
        <section class="timeline">
          <ul>
            <li>
              <div class="content">
                <div class="timeline-content-info">
                  <span class="timeline-content-info-title">
                    <i class="fa fa-certificate" aria-hidden="true"></i>
                    New York University B.A. Mathematics and B.A. Economics
                  </span>
                  <span class="timeline-content-info-date">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    Aug 2019 - May 2023
                  </span>
                </div>
                <p>
                  I attended university. Eager to learn more about myself and my
                  career.
                </p>
                <div class="content-skills">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>jQuery</span>
                  <span>Wordpress</span>
                </div>
              </div>
            </li>
            <li>
              <a href="https://www.wyzant.com/Tutors/Kelvin0510">
                <div class="content">
                  <div class="timeline-content-info">
                    <span class="timeline-content-info-title">
                      <i class="fa fa-certificate" aria-hidden="true"></i>
                      Private Tutor @ Wyzant
                    </span>
                    <span class="timeline-content-info-date">
                      <i class="fa fa-calendar" aria-hidden="true"></i>
                      Dec 2019 - Dec 2022
                    </span>
                  </div>
                  <p>
                    I tutored high school students looking to score high on the
                    SAT exam.
                  </p>
                  <div class="content-skills">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                    <span>Wordpress</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <div class="content">
                <div class="timeline-content-info">
                  <span class="timeline-content-info-title">
                    <i class="fa fa-certificate" aria-hidden="true"></i>
                    Fullstack Dev @ Geaux Network
                  </span>
                  <span class="timeline-content-info-date">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    Jan 2023 - Mar 2023
                  </span>
                </div>
                <p>
                  As a fullstack engineer intern at the Geaux Network, I created
                  software for their web player, and helped with database
                  creation
                </p>
                <div class="content-skills">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>jQuery</span>
                  <span>Wordpress</span>
                </div>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="timeline-content-info">
                  <span class="timeline-content-info-title">
                    <i class="fa fa-certificate" aria-hidden="true"></i>
                    IT/SWE Intern @ China Merchants Bank
                  </span>
                  <span class="timeline-content-info-date">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    Oct 2023 - Present
                  </span>
                </div>
                <p>
                  I currently work in IT at China Merchants Bank. My
                  responsibilities include creating APIs and maintaining
                  infrastructure.
                </p>
                <div class="content-skills">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JS</span>
                  <span>Java</span>
                  <span>Python</span>
                  <span>jQuery</span>
                  <span>Spring Boot</span>
                  <span>SQL</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div> */}
    </div>
  );
}

export default Experience;
