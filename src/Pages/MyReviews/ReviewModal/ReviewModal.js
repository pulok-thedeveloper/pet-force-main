import React, { useState } from "react";
import { toast } from "react-toastify";

const ReviewModal = ({closeModal, review}) => {
    const [newReview, setNewReview] =useState(review);


    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const updatedReview = {...review}
        updatedReview[field] = value;
        setNewReview(updatedReview);
        console.log(updatedReview);
    }

    const handleSubmit = event =>{
        event.preventDefault();
          console.log(newReview)
          fetch(`http://localhost:5000/review/${review?._id}`,
          {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(newReview)
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
          <textarea
            onChange={handleInputChange}
            name="review"
            className="px-5 py-2 input-focus outline-none rounded-lg h-24 w-full mb-3"
            placeholder="Service Details"
            defaultValue={review?.review}
          ></textarea>
          <input
            className="rounded-full primary-btn py-2 px-5 cursor-pointer font-semibold text-white"
            type="submit"
            value="Update"
          />
          <button
            onClick={closeModal}
            className="rounded-full primary-btn py-2 px-5 cursor-pointer font-semibold text-white ml-5"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
