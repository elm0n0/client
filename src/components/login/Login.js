import React from "react";
import { Link } from "react-router-dom";

const Loggin = () => {
  const user = null;

  return (
    <div>
      <Link to={"/"}>Home</Link>
      {user ? <Link to={"/singOut"}>singOut</Link> : <Link to={"/singIn"}>singIn</Link>}
    </div>
  );
};

export default Loggin;
