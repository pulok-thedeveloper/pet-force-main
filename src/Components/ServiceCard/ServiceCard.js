import React from "react";
import { useNavigate } from "react-router-dom";
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const navigate = useNavigate();

    const handleNavigate = (id) =>{
        navigate(`/services/${id}`)
    }

  return (
    <div className="service-card p-10 grid min-[450px]:grid-cols-6 gap-8 rounded">
      <div className="service-card-icon">
        <img alt="" src={service?.icon} />
      </div>
      <div className="col-span-5">
        <h3 onClick={()=>{handleNavigate(service?._id)}} className="service-title text-xl font-semibold mb-3 cursor-pointer">{service?.title}</h3>
        <p className="leading-loose mb-2">{service?.description}</p>
        <p onClick={()=>{handleNavigate(service?._id)}} className="details-btn font-medium cursor-pointer">More Details</p>
      </div>
    </div>
  );
};

export default ServiceCard;
