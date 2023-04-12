import React from "react";
import logo from "./assets/amazon.png";

const Topbar = () => {
  return (
    <nav className="Topbar">
      <img src={logo} className="logo" alt="Amazon Logo" />
    </nav>
  );
};

export default Topbar;
