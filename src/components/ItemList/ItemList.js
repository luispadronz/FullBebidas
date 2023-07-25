import React from "react";
import Item from "../Item/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ItemList = ({ data = [] }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
        {data.map((bebida) => {
          return <Item key={bebida.id} info={bebida} />;
        })}
        ;
      </Row>
    </Container>
  );
};

export default ItemList;
