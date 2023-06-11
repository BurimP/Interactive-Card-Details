import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import FormCard from "./FormCard";

const Container = () => {
  return (
    <div className="container">
      <FrontCard />
      <BackCard />
      <FormCard />
    </div>
  );
};

export default Container;
