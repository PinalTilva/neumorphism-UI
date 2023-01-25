import React from "react";

const Input = (props) => {
  return (
    <>
      <div>
        <label
          className="text-xs font-semibold text-slate-500"
          htmlFor={props.name}
        >
          {props.label}
        </label>
        <input
          id={props.name}
          className="w-full h-9 pl-4 focus:outline-0 rounded-md bg-slate-200 shadow-neu-"
          {...props}
        />
      </div>
    </>
  );
};

export default Input;
