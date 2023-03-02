import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hook/useTitle";
import Appointment from "../Home/Appointment/Appointment";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  useTitle('Service');

  const params = useParams();
  const serviceId = params?.id;
  const [service, setService] = useState();
  const [reviews, setReviews] = useState();
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://pet-force-server.vercel.app/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data.data));
  }, [serviceId]);

  useEffect(() => {
    fetch(`https://pet-force-server.vercel.app/review/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.data.reverse()));
  }, [serviceId, reviews]);

  const handleReview = event => {
    event.preventDefault()
    const form = event.target;
    const reviewMessage = form.review.value;

    const review = {
        serviceId: serviceId,
        name: user.displayName,
        email: user.email,
        img: user.photoURL,
        review: reviewMessage
    }

    fetch('https://pet-force-server.vercel.app/reviews', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(review)
    })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged){
            form.reset();
            toast("Review Added")
          }
            
        })
        .catch(err => console.error(err));
}

  return (
    <div className="mt-24">
      <div className="service-detail-container px-16 py-8 grid md:grid-cols-2 gap-12">
        <div className="">
          <img src={service?.image} alt="" />
        </div>
        <div className="">
          <h1 className="service-detail-title text-3xl font-bold mb-5">
            {service?.title}
          </h1>
          <p className="my-3">{service?.description}</p>
          <p className="mb-10">{service?.details}</p>
          <Link
            to="/services"
            className="primary-btn px-5 py-2 rounded-full text-white uppercase font-semibold"
          >
            <button>Book Appointment</button>
          </Link>
        </div>
      </div>

      <div className="reviews-container mt-5 mb-10 px-16">
        <hr className="mb-5" />
        <h3 className="font-bold text-2xl">{reviews?.length} Reviews</h3>
        <div className="grid gap-5 mt-5">
          {reviews?.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
        <div className="reviews-container mt-10">
          <h3 className="font-bold text-2xl mb-5">Add a Review</h3>
          <hr className="mb-5" />
          <form onSubmit={handleReview} className=" mb-10">
            <textarea
              name="review"
              className="px-5 py-2 input-focus outline-none rounded-lg h-24 w-full mb-3"
              placeholder="Type here..."
            ></textarea>
            <input
              className="rounded-full primary-btn py-2 px-5 cursor-pointer font-semibold text-white"
              type="submit"
              value="Post Review"
            />
          </form>
        </div>
      </div>
      <Appointment></Appointment>
      <ToastContainer/>
    </div>
  );
};

export default ServiceDetails;
