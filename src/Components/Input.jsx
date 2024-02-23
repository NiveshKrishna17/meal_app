import React, { Fragment } from "react";

const Input = ({ htmlFor, autoFocus, field, labelName }) => {
  return (
    <Fragment>
      <label
        htmlFor={htmlFor}
        className="block text-white text-sm font-bold mb-2"
      >
        {labelName}
      </label>
      <input
        {...field}
        autoFocus={autoFocus}
        type="text"
        id={htmlFor}
        name={htmlFor}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </Fragment>
  );
};

export default Input;
