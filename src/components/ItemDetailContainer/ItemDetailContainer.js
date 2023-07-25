import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Bebidas from "../Productos.json";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [bebidas, setBebidas] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getBebidas = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Bebidas);
      }, 1000);
    });
    getBebidas.then((res) =>
      setBebidas(res.find((bebida) => bebida.id === parseInt(detalleId)))
    );
  }, []);
  return (
    <div>
      <h1>Detalles del producto</h1>
      <ItemDetail bebidas={bebidas} />
    </div>
  );
};

export default ItemDetailContainer;
