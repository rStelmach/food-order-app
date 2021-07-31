/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
const Input = (props) => (
  <div className="pt-5 flex flex-col items-center ">
    <label
      htmlFor={props.input.id}
      className="font-semibold capitalize"
    >
      {props.label}
    </label>
    <input
      {...props.input}
      className="rounded-md w-20 text-center font-semibold"
    />
  </div>
);

export default Input;
