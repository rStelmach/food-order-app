import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const MealList = ({ id, name, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCart = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };
  const meals = DUMMY_MEALS.map((meal) => (
    <li key={meal.id} className="bg-alt  m-4 p-3 rounded-xl">
      <div className="meal flex flex-col h-64 w-48 justify-end ">
        <h2 className="pb-4 pt-2">{meal.name}</h2>
        <h3 className="font-semibold pb-5 ">{meal.price}</h3>
        <p className="font-normal">{meal.description}</p>
        <div>
          <MealItemForm id={meal.id} onAddToCart={addToCart} />
        </div>
      </div>
    </li>
  ));
  return (
    <div>
      <ul className="flex flex-wrap justify-center pt-10">{meals}</ul>
    </div>
  );
};
export default MealList;
