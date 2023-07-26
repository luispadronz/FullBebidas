import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ bebidas }) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
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
        <ItemCount initial={1} stock={100} onAdd={onAdd} />;
      </div>
    </div>
  );
};
export default ItemDetail;
