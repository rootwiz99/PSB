import React from "react";
import "../css/loader.css";
import img from "../images/path3.png"

const Loader = () => {
  return (
    <div className="loader">
      <img src={img} alt="loading..." />
    </div>
  );
};

export default Loader;
