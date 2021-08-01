import { useRef } from 'react';
import Input from '../UI/Input';

const MealItemForm = ({ id, onAddToCart }) => {
  const amount = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const enteredAmount = amount.current.value;
    const enteredNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredNumber < 1 ||
      enteredNumber > 5
    ) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    onAddToCart(enteredNumber);
  };

  return (
    <form className=" rounded-md " onSubmit={submitForm}>
      <Input
        ref={amount}
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: 1,
          max: 4,
          default: 1,
        }}
      />
      <button type="submit" className="font-bold py-1 capitalize ">
        add
      </button>
    </form>
  );
};
export default MealItemForm;
