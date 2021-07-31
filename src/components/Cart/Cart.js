import Modal from '../UI/Modal';

const Cart = ({ onHide }) => {
  const items = (
    <ul>
      {' '}
      {[{ id: 22, name: 'burger', amount: 2, price: 15 }].map(
        (item) => (
          <li key={item.id} className="capitalize font-semibold">
            {item.name}
          </li>
        ),
      )}
    </ul>
  );

  return (
    <Modal onHide={onHide}>
      {items}
      <div className=" flex justify-between ">
        <p className="py-2 text-2xl font-bold">Total Items:</p>
        <p className="py-2 font-bold text-2xl">10</p>
      </div>
      <div className=" flex justify-end p-3 ">
        <button
          onClick={onHide}
          className=" border-2 px-3 py-2 rounded-2xl text-white bg-secondary border-transparent "
          type="button"
        >
          Close
        </button>
        <button
          className="mx-5 border-2 px-3 py-2 rounded-2xl  text-secondary  border-secondary"
          type="button"
        >
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
