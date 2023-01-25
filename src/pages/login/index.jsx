import React from "react";
import { Button, Input } from "../../components";

import { ProfileIcon } from "../../icons";
const Login = () => {
  return (
    <>
      <div className="sm:w-6/12 flex flex-col justify-between md:w-4/12 bg-slate-200 h-auto shadow-neu rounded-lg p-5">
        <div className="h-16 aspect-square">
          <ProfileIcon />
        </div>
        <div className="w-full">
          <h3 className="text-center text-slate-500">Login Form</h3>
        </div>
        <div>
          <Input
            type="text"
            placeholder="User Name"
            name="userName"
            label="User Name"
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            label="Password"
          />
        </div>
        <div className="mt-4 text-center">
          <Button text="Login" color="success" />
        </div>
        <small className="text-center hover:text-blue-400 mt-2 text-xs text-slate-500">
          <a href="">Forgot password?</a>
        </small>
      </div>
    </>
  );
};

export default Login;
