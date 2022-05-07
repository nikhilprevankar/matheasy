import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

function NavBar() {
  return (
    <Navbar bg="primary" >
      <Container>
        <Navbar.Brand href="#home"><Badge bg="primary">{'Matheasy'}</Badge></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
