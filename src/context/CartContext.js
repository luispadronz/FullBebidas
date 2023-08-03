import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const totalPrice = () => {
    return cart.reduce(
      (acumulador1, act) => acumulador1 + act.quantity * act.price,
      0
    );
  };

  const totalProducts = () => {
    return cart.reduce(
      (acumulador2, productoActual) => acumulador2 + productoActual.quantity,
      0
    );
  };

  const addProduct = (item, quantity) => {
    const productIndex = cart.findIndex((product) => product.id === item.id);

    if (productIndex !== -1) {
      const newCart = [...cart];
      newCart[productIndex].quantity += quantity;
      setCart(newCart);
    } else {
      const product = { ...item, quantity: quantity };
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  console.log("carrito", cart);

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
