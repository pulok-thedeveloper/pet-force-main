import React, { useEffect, useState } from "react";
import Headericon from "../../../Assets/title-icon.png";
import "./Gallery.css";
import { FaEye } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const Gallery = () => {
  const [gallery, setGallery] = useState();

  useEffect(() => {
    fetch("https://pet-force-server.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data.data));
  }, []);
  return (
    <div className="gallery-container lg:min-h-screen grid justify-items-center p-16">
      <div className="mb-10">
        <div className="mb-3 grid justify-items-center">
          <img src={Headericon} alt="" />
        </div>
        <h1 className="section-title font-semibold text-center mb-3">
          Works Gallery
        </h1>
        <p className="section-decription text-center">
          For professional dog and cat grooming needs
        </p>
      </div>
      <PhotoProvider>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {gallery?.map((image) => (
            <PhotoView src={image?.img}>
              <div className="image-container relative" key={image._id}>
                <img src={image?.img} alt="" />
                <div className="overlay-box absolute h-full top-0 grid place-items-center">
                  <span className="eye-icon rounded-full p-3">
                    <FaEye />
                  </span>
                </div>
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Gallery;
