import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card-container rounded mb-12">
      <div className="relative">
        <img className="rounded-t w-full" alt="" src={blog?.img} />
        <div className="post-date absolute top-0 right-0 w-20 h-20 items-center justify-center text-white text-xl flex flex-col rounded-tr">
          <span className=" font-semibold">{blog?.date.slice(0, 2)}</span>
          <span className="uppercase">{blog?.date.slice(2)}</span>
        </div>
      </div>
      <div className="p-5 bg-white border rounded">
        <div className="flex gap-5 text-sm font-semibold">
          <p className="uppercase">{blog.category}</p>
          <p>{blog.comments} Comments</p>
          <p>{blog.likes} Likes</p>
        </div>
        <h1 className="blog-title cursor-pointer text-xl font-bold mt-5 mb-3">{blog.title}</h1>
        <p className="">{blog.details.slice(0, 80)} ...</p>
        <div className="relative py-8">
          <Link className="absolute top-5 -right-5" to="/">
            <button className="primary-btn read-more-btn px-5 py-2 rounded-l-full font-semibold text-white">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
