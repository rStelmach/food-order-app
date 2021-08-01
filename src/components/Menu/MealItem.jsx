import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

const MealItem = ({ id, name, price, description }) => {
  const cartCtx = useContext(CartContext);
  const priceN = `€${price.toFixed(2)}`;

  const addToCart = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <li key={id} className="bg-alt  m-4 p-3 rounded-xl">
      <div className="meal flex flex-col h-64 w-48 justify-end ">
        <h2 className="pb-4 pt-2">{name}</h2>
        <h3 className="font-semibold pb-5 ">{priceN}</h3>
        <p className="font-normal">{description}</p>
        <div>
          <MealItemForm id={id} onAddToCart={addToCart} />
        </div>
      </div>
    </li>
  );
};
export default MealItem;
