import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container text-white mt-20">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper slider-wrapper"
      >
        <div>
          <SwiperSlide className="slide text-center lg:text-left lg:grid-cols-2 items-center">
            <div className="grid gap-10 px-16">
              <h1 className="hero-title leading-tight">
                We Give Special Care to Your{" "}
                <span className="highlight font-semibold">Loving Pets</span>
              </h1>
              <p className="leading-loose">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <div>
                <Link className="hero-btn px-5 py-2 rounded-full text-white uppercase font-semibold">
                  <button>Book Appointment</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </div>

        <SwiperSlide className="slide text-center lg:text-left lg:grid-cols-2 items-center">
          <div className="grid gap-10 px-16">
            <h1 className="text-6xl leading-tight">
              <span className="highlight font-semibold">Highest Quality</span>{" "}
              of Care for Pets You'll Love
            </h1>
            <p className="leading-loose">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div>
              <Link className="hero-btn px-5 py-2 rounded-full text-white uppercase font-semibold">
                <button>Book Appointment</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
