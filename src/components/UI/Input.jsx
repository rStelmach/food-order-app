/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Input = React.forwardRef(({ input, label }, ref) => (
  <div className="pt-5 flex flex-col items-center ">
    <label htmlFor={input.id} className="font-semibold capitalize">
      {label}
    </label>
    <input
      ref={ref}
      {...input}
      className="rounded-md w-20 text-center font-semibold"
    />
  </div>
));

export default Input;
