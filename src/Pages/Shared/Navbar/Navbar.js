import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav-container w-full h-20 px-16 grid grid-cols-5 justify-between items-center">
        <div className="logo-container col-span-1">
          <Link to="/" className="text-3xl font-bold ">
            PET<span className="logo-2">FORCE</span>
          </Link>
        </div>
        <div className="col-span-3">
          <ul className="nav-links flex justify-center gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-right col-span-1">
          <Link
            to="/signin"
            className="signin-btn px-5 py-2 rounded-full font-semibold text-white"
          >
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
