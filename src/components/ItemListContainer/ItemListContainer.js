import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Bebidas from "../Productos.json";
import ItemList from "../ItemList/ItemList";
export const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Bebidas);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={100} onAdd={onAdd} />
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
