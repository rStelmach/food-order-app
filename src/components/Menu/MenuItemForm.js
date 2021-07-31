import Input from '../UI/Input';

const MealItemForm = () => (
  <form className=" rounded-md ">
    <Input
      label="amount:"
      input={{
        id: 'amount',
        type: 'number',
        min: 1,
        max: 4,
        default: 1,
      }}
    />
    <button type="button" className="font-bold py-1">
      Add
    </button>
  </form>
);
export default MealItemForm;
