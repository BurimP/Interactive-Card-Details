import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCVC] = useState("");

  const [wrongCardNumber, setWrongCardNumber] = useState("wrong-format-hidden");
  const [wrongMonth, setWrongMonth] = useState("blank-month-hidden");
  const [wrongYear, setWrongYear] = useState("blank-year-hidden");
  const [wrongCvc, setWrongCvc] = useState("blank-cvc-hidden ");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    props.name(name);

    if (cardNumber === "") {
      setWrongCardNumber("wrong-format");
    } else {
      setWrongCardNumber("wrong-format-hidden");
      props.cardNumber(cardNumber);
    }

    if (month === "") {
      setWrongMonth("blank-month");
    } else {
      setWrongMonth("blank-month-hidden");
      props.month(month);
    }

    if (year === "") {
      setWrongYear("blank-year");
    } else {
      setWrongYear("blank-year-hidden");
      props.year(year);
    }

    if (cvc === "") {
      setWrongCvc("blank-cvc");
    } else {
      setWrongCvc("blank-cvc-hidden");
      props.cvc(cvc);
    }
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
        <label className={wrongCardNumber}>Wrong format, numbers only</label>
      </div>
      {/* <div className="wrong-format">Wrong format, numbers only</div> */}
      <div className="form-row">
        <div className="form-row-inline">
          <div className="form-row2">
            <label htmlFor="expiryMonth">Month</label>
            <input
              type="text"
              id="expiryMonth"
              placeholder="MM"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <label className={wrongMonth}>Can&apos;t be blank</label>
          </div>
          <div className="form-row2">
            <label htmlFor="expiryMonth">Year</label>
            <input
              type="text"
              id="expiryYear"
              placeholder="YY"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <label className={wrongYear}>Can&apos;t be blank</label>
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
            <label className={wrongCvc}>Can&apos;t be blank</label>
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
