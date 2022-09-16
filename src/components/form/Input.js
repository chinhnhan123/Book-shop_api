import React from "react";
import PropTypes from "prop-types";

const Input = ({ labelName, type, placeholder, register, errors }) => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label>{labelName}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="p-4 border border-gray-100 rounded-md"
        {...register}
      />
      {errors.email && (
        <div className="text-sm text-red-500">{errors.email?.message}</div>
      )}
    </div>
  );
};
Input.defaultProps = {
  labelName: null,
  type: "text",
  placeholder: "Please enter ....",
  register: undefined,
  errors: undefined,
};
export default Input;
