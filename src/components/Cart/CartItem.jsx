const CartItem = ({ price, name, onDelete, onAdd, amount }) => (
  <li>
    <h2 className="text-xl font-bold">{name}</h2>

    <div className="flex justify-between py-4 text-2xl font-bold">
      <div className="flex  ">
        <div className="flex ">
          <p className="px-1 text-danger">{price}</p>
          <p className="px-3 font-semibold">x {amount}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          className=" border-2 px-2 mx-1 rounded-md border-alt"
          onClick={onDelete}
        >
          −
        </button>
        <button
          type="button"
          className=" border-2 px-2 mx-1 rounded-md border-alt"
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </div>
    <div className=" block text-center w-full h-0.5 bg-alt my-2" />
  </li>
);

export default CartItem;
