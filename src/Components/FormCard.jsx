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

  const [redCard, setRedCard] = useState("cardNumber");
  const [redMonth, setRedMonth] = useState("expiryMonth");
  const [redYear, setRedYear] = useState("expiryYear");
  const [redCvc, setRedCvc] = useState("cvc");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const handleBlankInput = () => {
    //   setName("");
    //   setCardNumber("");
    //   setMonth("");
    //   setYear("");
    //   setCVC("");
    // };

    console.log("Form submitted");

    props.name(name);

    if (/[^0-9\s]/.test(cardNumber)) {
      setWrongCardNumber("wrong-format");
      setRedCard("cardNumberRed");
    } else {
      setWrongCardNumber("wrong-format-hidden");
      setRedCard("cardNumber");
      props.cardNumber(cardNumber);
    }

    if (month === "") {
      setWrongMonth("blank-month");
      setRedMonth("expiryMonthRed");
    } else {
      setWrongMonth("blank-month-hidden");
      setRedMonth("expiryMonth");
      props.month(month);
    }

    if (year === "") {
      setWrongYear("blank-year");
      setRedYear("expiryYearRed");
    } else {
      setWrongYear("blank-year-hidden");
      setRedYear("expiryYear");
      props.year(year);
    }

    if (month != "" && year != "") {
      props.slash(true);
    }

    if (cvc === "") {
      setWrongCvc("blank-cvc");
      setRedCvc("cvcRed");
    } else {
      setWrongCvc("blank-cvc-hidden");
      setRedCvc("cvc");
      props.cvc(cvc);
    }

    if (
      !/[^0-9\s]/.test(cardNumber) &&
      month != "" &&
      year != "" &&
      cvc != "" &&
      name != ""
    ) {
      props.confirm(true);
    } else {
      props.confirm(false);
    }
  };

  const formatCardNumber = (inputValue) => {
    const trimmedInputValue = inputValue.replace(/\s/g, "");

    let formattedInputValue = trimmedInputValue.replace(/(.{4})/g, "$1 ");

    const maxLength = 19;
    formattedInputValue = formattedInputValue.substr(0, maxLength);

    setCardNumber(formattedInputValue);
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
          id={redCard}
          value={cardNumber}
          onChange={(e) => formatCardNumber(e.target.value)}
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
              id={redMonth}
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
              id={redYear}
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
              id={redCvc}
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
