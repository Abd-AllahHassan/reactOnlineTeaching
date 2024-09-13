import React from "react";
import { price } from "../../../dummydata";
import "./PriceCard.css"; // Import the CSS file for styles

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="items shadow" key={val.name}>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="outline-btn">GET STARTED</button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
