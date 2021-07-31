/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultState;
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD', item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
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
