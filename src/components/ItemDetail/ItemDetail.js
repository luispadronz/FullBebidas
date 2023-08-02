import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ bebidas }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(bebidas, cantidad);
  };
  return (
    <div className="item-detail">
      <div className="item-image">
        {" "}
        <img className="imagen-item " src={bebidas.imagen} />{" "}
      </div>
      <div className="item-details">
        <h1 className="item-title">{bebidas.nombre}</h1>
        <p className="item-description">{bebidas.description}</p>
        <h2 className="item-price">{bebidas.precio}</h2>
        {goToCart ? (
          <Link to="/Cart">
            {" "}
            <Button variant="outline-success">Terminar Compra</Button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={100} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
