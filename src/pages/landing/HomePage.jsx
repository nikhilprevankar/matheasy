import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AlertMe from "../../components/AlertMe";
import NavBar from "../../components/NavBar";
import TableMe from "../../components/TableMe";

function HomePage() {
  const [grossTotal, setGrossTotal] = useState(0);

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <AlertMe total={grossTotal} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <TableMe updateGrossTotalFn={(total) => setGrossTotal(total)} />
        </Col>
      </Row>
      <Col sm={12}>
        <AlertMe total={grossTotal} />
      </Col>
    </Container>
  );
}

export default HomePage;
