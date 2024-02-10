import React from "react";
import FlagCard from "./FlagCard";

const Flags = ({ img, alt, title }) => {
  return (
    <div className="countryCard">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
    </div>
  );
};

export default Flags;
