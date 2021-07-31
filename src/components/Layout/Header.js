import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onShow }) => (
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

    <button
      type="button"
      onClick={onShow}
      className=" block  mr-36 font-semibold  text-2xl ml-2 rounded-md px-3 border-solid border-2 border-white "
    >
      <FontAwesomeIcon icon={faShoppingCart} /> Cart
    </button>
  </header>
);
export default Header;
