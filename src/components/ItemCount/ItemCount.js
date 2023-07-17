import "./ItemCount.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const disminuir = () => {
    setCount(count - 1);
  };

  const aumentar = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <Button
        className="lado2"
        variant="outline-dark"
        disabled={count <= 1}
        onClick={disminuir}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        className="lado1"
        variant="outline-dark"
        disabled={count >= stock}
        onClick={aumentar}
      >
        +
      </Button>
      <div className="counter">
        <Button
          variant="outline-success"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
