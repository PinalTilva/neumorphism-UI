import React from "react";
import { useNavigate } from "react-router-dom";
import { ComputerIcon } from "../../icons";
import { Button } from "../../components";
const Home = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="w-6/12 max-w-[300px]">
        <ComputerIcon />
      </div>
      <Button text="Go to login" />
    </React.Fragment>
  );
};

export default Home;
