import React from "react";

const Button = ({ isSubmitting, label }) => {
  return (
    <div>
      <button
        type="submit"
        className="p-4 font-semibold text-white bg-blue-600 rounded-lg "
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
        ) : (
          label
        )}
      </button>
    </div>
  );
};

export default Button;
