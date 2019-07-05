import React from "react";
import { Container, Row } from "react-bootstrap";

import ItemComponent from "./ItemComponent";
import PaginationComponent from "./PaginationComponent";

const ListComponent = () => {
  return (
    <Container>
      <Row>
        <ItemComponent />
      </Row>
      <Row className="justify-content-center">
        <PaginationComponent />
      </Row>
    </Container>
  );
};

export default ListComponent;
