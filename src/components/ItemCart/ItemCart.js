import React from "react";
import "./ItemCart.css";
// import Bebidas from "../Productos.json";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/esm/Button";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="item-cart2">
      <div className="item-image2">
        {/* <img className="imagen-item" src={imageUrl} alt={title} />
      </div>
      <div className="item-details2">
        <div className="item-title2">{title}</div>
        <div className="item-quantity2">Cantidad: {product.quantity}</div>
        <div className="item-price2">Precio: ${price}</div> */}
        <div className="subtotal2">
          Subtotal: ${product.quantity * product.price}
        </div>
        <Button onClick={removeProduct(product.id)} variant="outline-success">
          Eliminar
        </Button>
      </div>
    </div>
  );
};

export default ItemCart;
