import React from "react";
import { ComputerIcon } from "../../icons";
import { Button } from "../../components";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <React.Fragment>
      <div className="w-6/12 max-w-[300px]">
        <ComputerIcon />
      </div>
      <Link to={"/login"}>
        <Button text="Go to login" />
      </Link>
    </React.Fragment>
  );
};

export default Home;
