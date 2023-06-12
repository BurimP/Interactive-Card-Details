import React, { useState } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import FormCard from "./FormCard";
import Confirmation from "./Confirmation";

const Container = () => {
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [slash, setSlash] = useState(false);

  const handleBlankInput = () => {};

  const [confirmDelete, setConfirmDelete] = useState("confirmation");
  const handleConfirmDelete = () => {
    setConfirmDelete("confirmation-delete");
  };

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
  const handleSlash = () => {
    setSlash(true);
  };
  return (
    <div className="container">
      <FrontCard
        month={month}
        year={year}
        cardNumber={cardNumber}
        name={name}
        slash={slash}
      />
      <BackCard cvc={cvc} />
      <FormCard
        cvc={handleCvc}
        month={handleMonth}
        year={handleYear}
        cardNumber={handleNumber}
        name={handleName}
        confirm={setConfirm}
        slash={handleSlash}
        handleBlankInput={handleBlankInput}
      />
      {confirm && (
        <Confirmation
          confirmDelete={confirmDelete}
          handleConfirmDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default Container;
