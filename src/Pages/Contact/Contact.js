import React from "react";
import useTitle from "../../Hook/useTitle";
import "./Contact.css";

const Contact = () => {
  useTitle("Contact");

  return (
    <div className=" mt-20 p-16 grid md:grid-cols-2 gap-20">
      <div className="">
        <div>
          <h1 className="section-title font-semibold mb-3 ">Get In Touch</h1>
          <p className="section-description">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta.
          </p>
        </div>
        <form className="contact-form grid mt-16 gap-10 text-sm">
          <input
            type="email"
            className="contact-input border-b-2 py-3 outline-none"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="contact-input border-b-2 py-3 outline-none"
            placeholder="Subject"
          />
          <textarea
            rows={5}
            className="contact-input border-b-2 py-3 outline-none"
            placeholder="Your Message"
          ></textarea>
          <div>
            <input
              className="py-2 px-5 primary-btn rounded-full text-white text-xl font-semibold"
              type="submit"
              value="Submit Now"
            />
          </div>
        </form>
      </div>
      <div className="grid items-center">
        <div className="border-l-2 pl-20">
          <div className="mb-8">
            <h3 className="font-semibold">Address:</h3>
            <p>
              52A, Tailstoi Town 5238 <br></br>
              La city, IA 85796
            </p>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold">Phone:</h3>
            <p>+(1) 234 567 8900</p>
          </div>
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p>support@petforce.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
