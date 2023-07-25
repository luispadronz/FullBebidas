import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Bebidas from "../Productos.json";

export const ItemDetailContainer = () => {
  const [bebidas, setBebidas] = useState({});

  useEffect(() => {
    const getBebidas = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Bebidas);
      }, 3000);
    });
    getBebidas.then((res) => setBebidas(res));
  }, []);
  console.log(bebidas);
  return (
    <div>
      <h1>Detalles del producto</h1>
      <ItemDetail bebidas={bebidas} />
    </div>
  );
};

export default ItemDetailContainer;
