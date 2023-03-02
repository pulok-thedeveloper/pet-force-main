import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    fetch(`https://pet-force-server.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setreviews(data.data));
  }, [user?.email, reviews]);

  const handleDelete = (id) => {
    console.log(id)
    const proceed = window.confirm("Are you want to delete this review");
    if (proceed) {
      fetch(`https://pet-force-server.vercel.app/review/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          if (data.data.deletedCount > 0) {
            const remaining = reviews.filter((review) => review._id !== id);
            setreviews(remaining);
            toast("Deleted Successfully");
          }
        });
    }
  };

  return (
    <div className="p-16 grid grid-cols-3 gap-5">
      {reviews?.map((review) => (
        <MyReviewCard
          key={review._id}
          review={review}
          handleDelete={handleDelete}
        ></MyReviewCard>
      ))}
      <ToastContainer />
    </div>
  );
};

export default MyReviews;
