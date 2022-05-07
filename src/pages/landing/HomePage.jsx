import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AlertMe from "../../components/AlertMe";
import NavBar from "../../components/NavBar";
import TableMe from "../../components/TableMe";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col sm={12} >
          <AlertMe/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} >
          <TableMe/>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
