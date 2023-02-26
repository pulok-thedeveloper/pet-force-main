import React, { useEffect, useState } from "react";
import Headericon from "../../../Assets/title-icon.png";
import "./Gallery.css";

const Gallery = () => {
  const [gallery, setGallery] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data.data));
  }, []);
  return (
    <div className="gallery-container min-h-screen grid justify-items-center py-16">
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
      <div className="grid grid-cols-3 gap-5">
        {gallery?.map((image) => (
          <img src={image?.img} key={image._id} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
