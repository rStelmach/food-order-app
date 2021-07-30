// // import cart from '../../assets/cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="flex  align-baseline text-white justify-between  bg-red-500 p-8">
      <h1 className="px-56 font-bold  text-4xl tracking-wide text-shadow-md">
        EasyOrder
      </h1>
      <nav>
        <ul className="flex justify-between w-64 font-semibold  text-2xl text-shadow-sm ">
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">GitHub</li>
        </ul>
      </nav>

      <button
        type="button"
        className=" mr-36 font-semibold  text-2xl ml-2"
      >
        <FontAwesomeIcon icon={faShoppingCart} /> Cart
      </button>
    </header>
  );
}
export default Header;
