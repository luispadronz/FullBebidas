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
      }, 300);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((bebida) => bebida.categoria === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
