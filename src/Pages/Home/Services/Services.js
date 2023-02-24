import React from "react";
import "./Services.css";
import Headericon from "../../../Assets/title-icon.png";

const Services = () => {
  return (
    <div className="services-container min-h-screen grid justify-items-center py-16">
      <div className="grid justify-items-center">
        <div className="mb-5">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold mb-3">
         Our Services
        </h1>
        <p className="section-decription">
        For professional dog and cat grooming needs
        </p>
      </div>
    </div>
  );
};

export default Services;