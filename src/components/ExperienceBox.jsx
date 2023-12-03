import "../styles/ExperienceBox.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ExperienceBox(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={props.link}>
      <div className="hover-image-text">
        <img src={props.background} alt="background" />
        <div className="hover-text">{props.title}</div>
      </div>
    </Link>
  );
}

export default ExperienceBox;
