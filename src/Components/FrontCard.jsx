import React from "react";

const FrontCard = (props) => {
  return (
    <div className="front-card">
      <p className="month-year">{`${props.month} ${props.year}`}</p>
      <p className="number">{props.cardNumber}</p>
      <p className="name">{props.name}</p>
    </div>
  );
};

export default FrontCard;
