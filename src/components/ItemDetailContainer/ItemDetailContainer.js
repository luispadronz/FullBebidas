import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [bebidas, setBebidas] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "Productos", detalleId);
    getDoc(queryDoc).then((res) => setBebidas({ id: res.id, ...res.data() }));
  }, [detalleId]);
  return (
    <div>
      <h1>Detalles del producto</h1>
      <ItemDetail bebidas={bebidas} />
    </div>
  );
};

export default ItemDetailContainer;
