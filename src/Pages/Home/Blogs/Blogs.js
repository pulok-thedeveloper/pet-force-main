import React, { useEffect, useState } from "react";
import Headericon from "../../../Assets/title-icon.png";
import BlogCard from "./BlogCard/BlogCard";
import "./Blogs.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("https://pet-force-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="blogs-container bg-white lg:min-h-screen grid justify-items-center px-16 pt-16 pb-8">
      <div className="mb-10">
        <div className="grid justify-items-center">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold mb-3 text-center">
          What's Happening
        </h1>
        <p className="section-decription text-center">
          Because We Really Care About Your Pets
        </p>
      </div>
      <div className="grid grid-cols-1">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            "@0.0": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            "@2.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper3 col-span-3"
        >
          {blogs?.map((blog) => (
            <SwiperSlide className="slide3">
              <BlogCard key={blog._id} blog={blog}></BlogCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
