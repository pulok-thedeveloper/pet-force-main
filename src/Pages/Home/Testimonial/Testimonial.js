import React, { useEffect, useState } from "react";
import Headericon from "../../../Assets/title-icon.png";
import "./Testimonial.css";
import quotation from "../../../Assets/quotation-marks.png";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

const Testimonial = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="testimonial-container min-h-screen grid justify-items-center px-16 pt-16 pb-8">
      <div className="mb-10">
        <div className="grid justify-items-center">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold mb-3 text-center">
          Reading Testimonials
        </h1>
        <p className="section-decription text-center">
          Because We Really Care About Your Pets
        </p>
      </div>
      <div className="relative h-full w-full">
        
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper2"
      >
      {reviews?.map((review) => (
        <div>
        <SwiperSlide className="slide2">
          <div
            className="grid justify-center justify-items-center text-center gap-5 w-4/6 mx-auto"
            key={review._id}
          >
            <img className="w-10" src={quotation} alt="" />
            <p className="testimonial-message">{review.review}</p>
            {review.img ? (
              <img className="rounded-full w-16" src={review.img} alt="" />
            ) : (
              <img
                className="rounded-full w-16"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
              />
            )}
            <div className="mb-8">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-600">PET OWNER</p>
            </div>
          </div>
          </SwiperSlide>
        </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
