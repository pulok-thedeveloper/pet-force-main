import React from "react";
import Headericon from "../../../Assets/title-icon.png";
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonial-container min-h-screen grid justify-items-center py-16">
      <div className="grid justify-items-center">
        <div className="mb-5">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold mb-3">
          Reading Testimonials
        </h1>
        <p className="section-decription">
          Because We Really Care About Your Pets
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
