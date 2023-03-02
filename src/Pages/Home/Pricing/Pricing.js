import React from "react";
import { Link } from "react-router-dom";
import Headericon from "../../../Assets/title-icon.png";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container min-h-screen pt-16 px-16">
      <div className="mb-10">
        <div className="grid justify-items-center">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold text-center">
          Our Pricing List
        </h1>
        <p className="price-section-decription text-white text-center">
          For professional dog and cat grooming needs
        </p>
      </div>
      <div className="price-card-container bg-white p-20 grid md:grid-cols-3 gap-20">
        <div>
          <h3 className="price-title text-2xl border-b font-extralight pb-3">
            Basic
          </h3>
          <p className="border-b mt-10 pb-4 font-medium">
            <span className="text-5xl font-bold">$25 </span>/ Visit
          </p>
          <p className="font-bold mt-10 mb-2">Includes:</p>
          <ul className="feature-list">
            <li className="mb-1">Bath Spa & Brush</li>
            <li className="mb-1">Trim & Grooming</li>
            <li className="mb-1">Cleaning & Plucking</li>
          </ul>
          <Link className="enq-btn px-7 font-semibold py-3 rounded-full"><button>ENQUIRE THIS</button></Link>
        </div>

        <div>
          <h3 className="price-title text-2xl border-b font-extralight pb-3">
            Standard
          </h3>
          <p className="border-b mt-10 pb-4 font-medium">
            <span className="text-5xl font-bold">$45 </span>/ Visit
          </p>
          <p className="font-bold mt-10 mb-2">Includes:</p>
          <ul className="feature-list">
            <li className="mb-1">Bath Spa & Brush</li>
            <li className="mb-1">Trim & Grooming</li>
            <li className="mb-1">Cleaning & Plucking</li>
            <li className="mb-1">Designer Cologne</li>
          </ul>
          <Link className="enq-btn px-7 font-semibold py-3 rounded-full"><button>ENQUIRE THIS</button></Link>
        </div>

        <div>
          <h3 className="price-title text-2xl border-b font-extralight pb-3">
            Premium
          </h3>
          <p className="border-b mt-10 pb-4 font-medium">
            <span className="text-5xl font-bold">$75 </span>/ Visit
          </p>
          <p className="font-bold mt-10 mb-2">Includes:</p>
          <ul className="feature-list">
            <li className="mb-1">Bath Spa & Brush</li>
            <li className="mb-1">Trim & Grooming</li>
            <li className="mb-1">Cleaning & Plucking</li>
            <li className="mb-1">Pick n Drop Service</li>
          </ul>
          <Link className="enq-btn px-7 font-semibold py-3 rounded-full"><button>ENQUIRE THIS</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
