import "../styles/ExperienceBox.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ExperienceBox(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={props.link}>
      {/* <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={props.background} alt="Hoverable" />
        {isHovered && (
          <div className="text-overlay">
            <div>
              <h1>{props.title}</h1>
            </div>
            <div>
              <p>{props.desc}</p>
            </div>
          </div>
        )}
      </div> */}
      <div className="image-container">
        <img src={props.background} alt="Hoverable" />
        <div className="text-overlay">
          <div className="title">{props.title}</div>
          <div className="body">{props.desc}</div>
        </div>
      </div>
    </Link>
  );
}

export default ExperienceBox;
