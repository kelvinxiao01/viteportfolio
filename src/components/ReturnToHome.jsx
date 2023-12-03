import "../styles/ReturnToHome.css";
import { Link } from "react-router-dom";

function ReturnToHome() {
  return (
    <Link to="/">
      <button id="backButton">Go Back</button>
    </Link>
  );
}

export default ReturnToHome;
