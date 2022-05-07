import React from "react";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

function AlertMe() {
  return (
    <Alert>
      <h2 class="d-flex justify-content-center">
        Total <Badge bg="black">10000000</Badge>
      </h2>
    </Alert>
  );
}

export default AlertMe;
