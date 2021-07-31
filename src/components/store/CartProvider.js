/* eslint-disable no-unused-vars */
import CartContext from './cart-context';

const CartProvider = ({ children }) => {
  const addToCart = (item) => {};
  const removeFromCart = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addToCart,
    removeItem: removeFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
