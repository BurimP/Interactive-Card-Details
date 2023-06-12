import React from "react";

const FrontCard = (props) => {
  return (
    <div className="front-card">
      <div className="big-circle"></div>
      <div className="small-circle"></div>
      <p className="month-year">
        {props.month}
        {props.slash && " / "}
        {props.year}
      </p>
      <p className="number">{props.cardNumber}</p>

      <p className="name">{props.name}</p>
    </div>
  );
};

export default FrontCard;
