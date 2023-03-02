import React, { useEffect, useState } from "react";
import Headericon from "../../../Assets/title-icon.png";
import "./Appointment.css";

const Appointment = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("https://pet-force-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="appointment-container lg:min-h-screen p-16">
      <div className="mb-10">
        <div className="mb-3 grid justify-center">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold text-center text-white mb-3">
          Book Your Appointment
        </h1>
        <p className="section-decription_alt text-center text-white">
          Because We Really Care About Your Pets
        </p>
      </div>
      <form>
        <div className="grid grid-cols-3 gap-10 lg:gap-x-20 gap-y-6 mb-10">
          <input
            className="rounded-full col-span-3 sm:col-span-1 outline-none px-6 py-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="rounded-full col-span-3 sm:col-span-1 outline-none px-6 py-3"
            type="email"
            placeholder="Email"
          />
          <input
            className="rounded-full col-span-3 sm:col-span-1 outline-none px-6 py-3"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="rounded-full col-span-3 sm:col-span-1 outline-none px-6 py-3"
            type="text"
            placeholder="Date & Time"
          />
          <input
            className="rounded-full col-span-3 sm:col-span-1 outline-none px-6 py-3"
            type="text"
            placeholder="Pet Category"
          />
          <select className="rounded-full col-span-3 sm:col-span-1 outline-none px-6 py-3">
            <option disabled selected>
              Service Type
            </option>
            {services?.map((service) => (
              <option key={service?._id}>{service?.title}</option>
            ))}
          </select>
          <textarea
            className="col-span-3 px-6 py-3 rounded-lg outline-none"
            placeholder="Your Comments..."
            rows="5"
          ></textarea>
        </div>
        <div className="grid justify-center">
          <input
            type="submit"
            value="Send Request"
            className="primary-btn px-5 py-2 rounded-full text-white uppercase font-semibold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Appointment;
