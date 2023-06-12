import React, { useState } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import FormCard from "./FormCard";

const Container = () => {
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");

  const handleCvc = (cvc) => {
    setCvc(cvc);
  };
  const handleMonth = (month) => {
    setMonth(month);
  };
  const handleYear = (year) => {
    setYear(year);
  };
  const handleNumber = (number) => {
    setCardNumber(number);
  };
  const handleName = (name) => {
    setName(name);
  };
  return (
    <div className="container">
      <FrontCard
        month={month}
        year={year}
        cardNumber={cardNumber}
        name={name}
      />
      <BackCard cvc={cvc} />
      <FormCard
        cvc={handleCvc}
        month={handleMonth}
        year={handleYear}
        cardNumber={handleNumber}
        name={handleName}
      />
    </div>
  );
};

export default Container;
