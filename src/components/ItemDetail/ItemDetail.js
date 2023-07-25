import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ bebidas }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={bebidas.imagen} />
      <Card.Body>
        <Card.Title>{bebidas.nombre}</Card.Title>
        <Card.Text>{bebidas.description}</Card.Text>
        <Card.Text>{bebidas.precio}</Card.Text>
        <Button variant="dark">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
