// import cart from '../../assets/cart.png';

function Header() {
  return (
    <header className="flex justify-between  bg-red-500 p-8">
      <h1 className="px-56 font-bold text-white text-4xl tracking-wide text-shadow-md">
        EasyOrder
      </h1>
      <nav>
        <ul className="flex justify-between w-64 font-semibold text-white text-2xl text-shadow-sm ">
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">GitHub</li>
        </ul>
      </nav>
      {/* <img src={cart} alt="cart" className="" /> */}
      <button
        type="button"
        className=" mr-36 font-semibold text-white text-2xl"
      >
        Cart
      </button>
    </header>
  );
}
export default Header;
