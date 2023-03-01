import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userFirstWord = user?.email.slice(0, 1);
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleDropdown = () => {
    console.log(avatarDropdown);
    if (avatarDropdown) {
      setAvatarDropdown(false);
      console.log(avatarDropdown);
    } else {
      setAvatarDropdown(true);
      console.log(avatarDropdown);
    }
  };
  return (
    <div>
      <div className="nav-container w-full h-20 px-16 grid grid-cols-2 md:grid-cols-5 justify-between items-center fixed top-0 z-20 bg-white">
        <div className="logo-container col-span-1">
          <Link to="/" className="text-3xl font-bold ">
            PET<span className="logo-2">FORCE</span>
          </Link>
        </div>
        <div className="col-span-3 hidden md:block">
          <ul className="nav-links flex justify-center gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-right hidden md:grid col-span-1 justify-end">
          {user?.uid ? (
            <div className="relative">
              <div
                onClick={handleDropdown}
                className="user-avatar rounded-full flex justify-center items-center font-semibold text-xl cursor-pointer"
              >
                {user?.photoURL ? (
                  <img className="rounded-full" src={user?.photoURL} alt="" />
                ) : (
                  <p className="uppercase">{userFirstWord}</p>
                )}
              </div>
              <ul
                className={`avatar-dropdown absolute -right-2 top-14 bg-white w-32 rounded ${
                  !avatarDropdown && "hidden"
                }`}
              >
                <li className="pr-5 py-1">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="pr-5 py-1">
                  <Link onClick={logOut} to="/">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="signin-btn px-5 py-2 rounded-full font-semibold text-white"
            >
              <button>Sign in</button>
            </Link>
          )}
        </div>
        <div  className="md:hidden col-span-1 flex justify-end">
          <FaBars onClick={()=>setMobileNav(!mobileNav)} className=" text-xl" />
        </div>
      </div>
      {
        mobileNav &&
        <div className="mobile-nav absolute w-full border-t border-white z-10 right-0">
        <ul className="gap-10">
          <li>
            <Link
              className="block w-full text-center py-3 font-semibold border-white border-b"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block w-full text-center py-3 font-semibold border-white border-b"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="block w-full text-center py-3 font-semibold border-white border-b"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="block w-full text-center py-3 font-semibold border-white border-b"
              to="/blogs"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="block w-full text-center py-3 font-semibold border-white border-b"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          
        </ul>
      </div>
      }
    </div>
  );
};

export default Navbar;
