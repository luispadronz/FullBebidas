import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p className="fs-1">NO HAY ARTICULOS EN EL CARRITO</p>
        <Link to="/" className="btn btn-primary mb-5">
          ¡IR A COMPRAR!
        </Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <h5>Total: {totalPrice()}</h5>
    </>
  );
};

export default Cart;
