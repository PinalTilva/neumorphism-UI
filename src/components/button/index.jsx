import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { text, color } = props;
  return (
    <>
      <Link to={"/login"}>
        <button
          className={clsx(
            "text-slate-400 min-w-[150px] active:text-blue-400 shadow-neu active:shadow-neu- bg-slate-200 py-1 px-4 rounded-full",
            {
              "bg-green-500 text-white active:shadow-neuGreen- active:text-white active:font-semibold":
                color === "success",
            }
          )}
        >
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
