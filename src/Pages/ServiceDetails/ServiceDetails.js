import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './ServiceDetails.css';

const ServiceDetails = () => {
  const params = useParams();
  const serviceId = params?.id;
  const [service, setService] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data.data));
  }, [serviceId]);
  return (
    <div className="service-detail-container px-16 py-8 grid grid-cols-2 gap-12">
      <div className="">
        <img src={service?.image} alt="" />
      </div>
      <div className="">
        <h1 className="service-detail-title text-3xl font-bold mb-5">{service?.title}</h1>
        <p className="my-3">{service?.description}</p>
        <p className="mb-10">{service?.details}</p>
        <Link to='/services' className="primary-btn px-5 py-2 rounded-full text-white uppercase font-semibold"><button>Book Appointment</button></Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
