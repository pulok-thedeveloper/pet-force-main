import React, { useState } from "react";
import { toast } from "react-toastify";
import "./UpdateModal.css";

const UpdateModal = ({ closeModal, service }) => {
    const [newService, setNewService] =useState(service);


    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const updatedService = {...service}
        updatedService[field] = value;
        setNewService(updatedService);
    }

    const handleSubmit = event =>{
      event.preventDefault();
        // console.log(newService)
        fetch(`http://localhost:5000/service/${service?._id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.data.modifiedCount > 0){
                toast("Updated Successfully");
                closeModal();
            }
        })

    }
    
  return (
    <div>
      <div onClick={closeModal} className="modal-wrapper"></div>
      <div className="modal-container p-10">
        <h1 className="text-3xl mb-8">Update Service</h1>
        <form onSubmit={handleSubmit} className=" mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input
            onChange={handleInputChange}
              name="title"
              type="text"
              placeholder="Service Title"
              defaultValue={service?.title}
              className="px-5 py-2 input-focus outline-none rounded-full w-full"
            />
            <input
            onChange={handleInputChange}
              name="description"
              type="text"
              placeholder="Short Description"
              defaultValue={service?.description}
              className="px-5 py-2 input-focus outline-none rounded-full w-full"
            />
            <input
            onChange={handleInputChange}
              name="icon"
              type="text"
              placeholder="Icon URL"
              defaultValue={service?.icon}
              className="px-5 py-2 input-focus outline-none rounded-full w-full"
            />
            <input
            onChange={handleInputChange}
              name="img"
              type="text"
              placeholder="Image URL"
              defaultValue={service?.image}
              className="px-5 py-2 input-focus outline-none rounded-full w-full"
            />
          </div>
          <textarea
            onChange={handleInputChange}
            name="details"
            className="px-5 py-2 input-focus outline-none rounded-lg h-24 w-full mb-3"
            placeholder="Service Details"
            defaultValue={service?.details}
          ></textarea>
          <input
            className="rounded-full primary-btn py-2 px-5 cursor-pointer font-semibold text-white"
            type="submit"
            value="Update"
          />
          <button onClick={closeModal} className="rounded-full primary-btn py-2 px-5 cursor-pointer font-semibold text-white ml-5">Close</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
