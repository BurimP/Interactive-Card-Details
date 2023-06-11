import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCVC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">cardholder name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="form-row">
        <div className="form-row-inline">
          <div className="form-row2">
            <label htmlFor="expiryMonth">Month</label>
            <input
              type="text"
              id="expiryMonth"
              placeholder="MM"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
          </div>
          <div className="form-row2">
            <label htmlFor="expiryMonth">Year</label>
            <input
              type="text"
              id="expiryYear"
              placeholder="YY"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            />
          </div>
          <div className="form-row2">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <button className="btn" type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Form;
