import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <p className="fs-1">No hay articulos en el Carrito</p>
      <Link to="/" className="btn btn-primary mb-5">
        Ir a Comprar!
      </Link>
    </>
  );
};

export default Cart;
