import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">REDUX Ecommerce</Navbar.Brand>
        <Nav>
          <Nav.Link href="/" as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse></Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
