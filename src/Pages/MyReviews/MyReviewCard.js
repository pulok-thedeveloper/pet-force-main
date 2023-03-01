import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import ReviewModal from "./ReviewModal/ReviewModal";

const MyReviewCard = ({ review, handleDelete }) => {
  const [service, setService] = useState();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const [modalReview, setModalReview] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/service/${review?.serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data.data));
  }, [review?.serviceId]);

  return (
    <div className="bg-gray-100 p-3 rounded">
      <img src={service?.image} alt="" />
      <div className="mt-3">
        <h3 className="text-lg font-semibold mb-3">{service?.title}</h3>
        <p>{review?.review.slice(0, 100)} ...</p>
      </div>
      <div className="flex gap-5 mt-5">
            <button
            onClick={() => {
                setShowModal(true);
                setModalReview(review);
              }}
              className="edit-btn flex items-center gap-2 py-2 rounded px-3 text-white"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={() => {
                handleDelete(review._id);
              }}
              className="delete-btn flex items-center gap-2 py-2 rounded px-3 text-white"
            >
              <FaTrash /> Delete
            </button>
          </div>
          {showModal && (
        <ReviewModal
          closeModal={closeModal}
          review={modalReview}
        ></ReviewModal>
      )}
    </div>
  );
};

export default MyReviewCard;
