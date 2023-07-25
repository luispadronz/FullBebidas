import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ bebidas }) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={bebidas.imagen} />
        <Card.Body>
          <Card.Title>{bebidas.nombre}</Card.Title>
          <Card.Text>{bebidas.description}</Card.Text>
          <Card.Text>{bebidas.precio}</Card.Text>
        </Card.Body>
      </Card>
      <ItemCount initial={1} stock={100} onAdd={onAdd} />;
    </div>
  );
};

export default ItemDetail;
