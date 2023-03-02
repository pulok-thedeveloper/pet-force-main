import React, { useEffect, useState } from "react";
import "./ManageService.css";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import UpdateModal from "./UpdateModal/UpdateModal";

const ManageService = () => {
  const [services, setServices] = useState();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const [modalService, setModalService] = useState();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete this service");
    if (proceed) {
      fetch(`https://pet-force-server.vercel.app/service/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          if (data.data.deletedCount > 0) {
            const remaining = services.filter((service) => service._id !== id);
            setServices(remaining);
            toast("Deleted Successfully");
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://pet-force-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((error) => console.log(error.message));
  }, [services]);

  return (
    <div className="p-16">
      {services?.map((service) => (
        <div
          key={service._id}
          className="service-row flex w-full mb-5 p-5 rounded justify-between items-center"
        >
          <div className="flex gap-10 items-center">
            <img className="w-10" src={service?.icon} alt="" />
            <h3 className="">{service.title}</h3>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => {
                setShowModal(true);
                setModalService(service);
              }}
              className="edit-btn flex items-center gap-2 py-2 rounded px-3 text-white"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={() => {
                handleDelete(service._id);
              }}
              className="delete-btn flex items-center gap-2 py-2 rounded px-3 text-white"
            >
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      ))}
      {showModal && (
        <UpdateModal
          closeModal={closeModal}
          service={modalService}
        ></UpdateModal>
      )}
      <ToastContainer />
    </div>
  );
};

export default ManageService;
