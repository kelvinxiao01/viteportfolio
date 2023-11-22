import "../styles/Hero.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div id="hero-page">
      <TypeAnimation
        sequence={[
          "I am a developer",
          1000,
          "I am an athlete",
          1000,
          "I am a bookworm",
          1000,
          "I am Kelvin.",
          1000,
          "I am Kelvin. Nice to meet you!",
          500,
          "I am Kelvin. Nice to meet you! Welcome to my page :)",
          2000,
          "I am Kelvin. Nice to meet you! Welcome to my page :) Scroll down to learn more about me",
        ]}
        wrapper="span"
        speed={5}
        style={{
          fontSize: "2rem",
          display: "inline-block",
          fontFamily: "Noto Sans",
        }}
        repeat={0}
      />
    </div>
  );
}

export default Hero;
