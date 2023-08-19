import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = ({}) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Productos");

    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoriaId)
      );

      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
    }
  }, [categoriaId]);

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
