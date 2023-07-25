import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Bebidas from "../Productos.json";
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({}) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Bebidas);
      }, 1000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((bebida) => bebida.categoria === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };

  return (
    <div>
      <ItemCount initial={1} stock={100} onAdd={onAdd} />
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
