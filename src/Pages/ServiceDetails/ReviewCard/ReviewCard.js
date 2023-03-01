import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className="flex">
        <div className="flex gap-3 author-info pl-3 pr-10 py-2 rounded-tl">
          <div className="user-avatar rounded-full flex justify-center items-center font-semibold text-xl cursor-pointer">
            {review?.img ? (
              <img className="rounded-full" src={review?.img} alt="" />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
              />
            )}
          </div>
          <div>
            <p className="author-name font-semibold">{review.name}</p>
            <p className="text-sm text-gray-700">8 Hours ago</p>
          </div>
        </div>
      </div>
      <div className="p-3 author-review">
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
