import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./Cart.css";
import Button from "react-bootstrap/esm/Button";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items: cart,
      total: totalPrice(),
    };
    addDoc(ordersCollection, order).then((response) => {
      if (response.id) {
        clearCart();
        alert("Su orden:" + response.id + "ha sido completada");
      }
    });
  };
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  const handleChange = (ev) => {
    setFormValues((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

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
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
      </div>
      <div className="new-cart-container">
        <div className="new-cart-items"></div>
        <div className="new-cart-summary">
          <p className="new-total-price">Total: ${totalPrice()}</p>
        </div>
        <div className="new-cart-form">
          <form>
            <p className="new-form-title">Información del Cliente</p>
            <label className="new-form-label">Nombre y Apellido:</label>
            <input
              onChange={handleChange}
              value={formValues.name}
              className="new-custom-input"
              type="text"
              placeholder="Dejanos tu nombre"
              name="name"
            />
            <label className="new-form-label">Telefono:</label>
            <input
              onChange={handleChange}
              value={formValues.phone}
              className="new-custom-input"
              type="text"
              placeholder="Dejanos tu telefono"
              name="phone"
            />
            <label className="new-form-label">E-mail</label>
            <input
              onChange={handleChange}
              value={formValues.email}
              className="new-custom-input"
              type="text"
              placeholder="Dejanos tu E-mail"
              name="email"
            />
            <Button onClick={sendOrder} variant="outline-success">
              Enviar Pedido
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
