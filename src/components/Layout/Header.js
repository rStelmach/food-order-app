import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../store/cart-context';

const Header = ({ onShow }) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.reduce(
    (num, item) => num + item.amount,
    0,
  );
  return (
    <header className="flex  align-baseline text-white justify-between  bg-primary p-8">
      <h1 className="px-56 font-bold  text-4xl tracking-wide text-shadow-md">
        EasyOrder
      </h1>
      <nav>
        <ul className="flex justify-between w-64 font-semibold  text-2xl text-shadow-sm ">
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">
            <a href="https://github.com/rStelmach"> GitHub</a>
          </li>
        </ul>
      </nav>
      <div className="flex ">
        <button
          type="button"
          onClick={onShow}
          className="block mr-36 font-semibold text-2xl  rounded-md py-4 border-solid border-2 w-48 border-white "
        >
          <span className=" mr-3 px-2 text-danger border-2 border-danger rounded-full">
            {cartItems}
          </span>
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </button>
      </div>
    </header>
  );
};
export default Header;
