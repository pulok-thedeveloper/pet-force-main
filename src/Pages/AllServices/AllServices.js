import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="all-services-container min-h-screen grid grid-cols-1 justify-center py-16">
      <div className="mb-10">
        <h1 className="section-title font-semibold text-center">
          Our Services
        </h1>
        <p className="section-decription text-center">
          We are Professionals to care for your pets & giving you peace of mind
          about your pets
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 px-16">
        {services?.map((service) => (
            <ServiceCard
            key={service?._id}
            service={service}>
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
