import React from "react";
import Item from "./Item/Item";

const ItemList = ({ data = [] }) => {
  return (
    <div>
      {data.map((bebida) => {
        return <Item key={bebida.id} info={bebida} />;
      })}
      ;
    </div>
  );
};

export default ItemList;
