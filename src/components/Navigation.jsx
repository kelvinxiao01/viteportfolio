import "../styles/Navigation.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    // <Navbar className="navigation" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">Kelvin</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link href="#about">CMB</Nav.Link>
    //         <Nav.Link href="#experience">Wyzant</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className="side-nav-bar">
      <Link to="/">Kelvin</Link>
      <Link to="/cmb">CMB</Link>
      <Link to="/wyzant">Wyzant</Link>
      <Link to="/contact">Contact</Link>
      <Link className="about-link" to="/about">
        About Me
      </Link>
    </div>
  );
}

export default Navigation;
