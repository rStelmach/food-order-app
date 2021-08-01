/* eslint-disable react/jsx-no-bind */
import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onHide }) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const totalAmountN = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = items.length > 0;

  const deleteItem = (id) => {
    cartCtx.removeItem(id);
  };

  const addItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const itemsInCart = (
    <ul className="max-h-80 overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onDelete={deleteItem.bind(null, item.id)}
          onAdd={addItem.bind(null, item)}
        />
      ))}
    </ul>
  );
  // console.log(items);
  return (
    <Modal onHide={onHide}>
      {itemsInCart}
      <div className=" flex justify-between ">
        <p className="py-2 text-2xl font-bold">Total Items:</p>
        <p className="py-2 font-bold text-2xl">{totalAmountN}</p>
      </div>
      <div className=" flex justify-end p-3 ">
        <button
          onClick={onHide}
          className=" border-2 px-3 py-2 rounded-2xl text-white bg-secondary border-transparent "
          type="button"
        >
          Close
        </button>
        {hasItems && (
          <button
            className="mx-5 border-2 px-3 py-2 rounded-2xl  text-secondary  border-secondary"
            type="button"
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
