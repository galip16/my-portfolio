import React from "react";
import "../header/Header.scss";
import Logo from "./logo.png";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="white" expand="lg" className="navbar__container">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle-hamburger"
        />
        <Navbar.Collapse
          width="auto"
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#projects">
              <Button variant="outline-success"> Projects </Button>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Button variant="outline-primary"> Say Hello </Button>
            </Nav.Link>
            <Nav.Link href="/Lebenslauf.pdf" target="_blank">
              <Button variant="outline-danger"> My CV </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
