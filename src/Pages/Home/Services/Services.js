import React, { useEffect, useState } from "react";
import "./Services.css";
import Headericon from "../../../Assets/title-icon.png";
import { Link } from "react-router-dom";
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("https://pet-force-server.vercel.app/limitedservice")
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="services-container min-h-screen grid grid-cols-1 justify-center py-16">
      <div className="mb-10">
        <div className="mb-3 grid justify-center">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold text-center">
          Our Services
        </h1>
        <p className="section-decription text-center">
          For professional dog and cat grooming needs
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 px-16">
        {services?.map((service) => (
          <ServiceCard
            key={service?._id}
            service={service}>
          </ServiceCard>
        ))}
      </div>
      <div className="mt-12 justify-self-center"><Link to='/services' className="primary-btn px-5 py-2 rounded-full text-white uppercase font-semibold"><button>See All Services</button></Link></div>
    </div>
  );
};

export default Services;
