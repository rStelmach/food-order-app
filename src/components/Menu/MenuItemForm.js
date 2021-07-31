import Input from '../UI/Input';

const MealItemForm = ({ id }) => (
  <form className=" rounded-md ">
    <Input
      label="amount:"
      input={{
        id: `amount_${id}`,
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
