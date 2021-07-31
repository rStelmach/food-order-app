/* eslint-disable react/jsx-props-no-spreading */
const Input = ({ input, label }) => (
  <div className="pt-5 flex flex-col items-center ">
    <label htmlFor={input.id} className="font-semibold capitalize">
      {label}
    </label>
    <input
      {...input}
      className="rounded-md w-20 text-center font-semibold"
    />
  </div>
);

export default Input;
