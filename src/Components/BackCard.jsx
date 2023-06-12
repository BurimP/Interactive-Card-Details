import React from "react";

const BackCard = (props) => {
  return (
    <div className="back-card">
      <p className="cvc-holder">{props.cvc}</p>
    </div>
  );
};

export default BackCard;
