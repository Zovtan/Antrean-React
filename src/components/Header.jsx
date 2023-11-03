import React from "react";
import "../css/login.css";
import Jumlah from "../assets/Jumlah.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo1" src={Jumlah} alt="jumlah" />
    </div>
  );
};

export default Header;
