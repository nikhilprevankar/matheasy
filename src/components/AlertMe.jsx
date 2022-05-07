import React from "react";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

function AlertMe({total}) {
  return (
    <Alert>
      <h2 className="d-flex justify-content-center" >
        Gross Total <Badge bg="black">{total}</Badge>
      </h2>
    </Alert>
  );
}

export default AlertMe;
