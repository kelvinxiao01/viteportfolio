import "../styles/Button.css";
import { Link } from "react-router-dom";

function ReturnToHome(props) {
  return (
    <Link to={props.link}>
      <button id="backButton">{props.text}</button>
    </Link>
  );
}

export default ReturnToHome;
