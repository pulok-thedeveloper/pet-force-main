import React from "react";
import Headericon from "../../../Assets/title-icon.png";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container min-h-screen grid justify-items-center py-16 text-white">
      <div className="grid justify-items-center">
        <div className="mb-5">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold mb-3">Our Pricing List</h1>
        <p className="section-decription">
          For professional dog and cat grooming needs
        </p>
      </div>
    </div>
  );
};

export default Pricing;
