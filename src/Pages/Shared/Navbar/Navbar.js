import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { IoHomeOutline, IoPawOutline, IoPeopleOutline } from "react-icons/io5";
import { RiPenNibLine, RiContactsLine } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userFirstWord = user?.email.slice(0, 1);
  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("https://pet-force-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((error) => console.log(error.message));
  }, []);

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
      <div className="nav-container w-full h-24 md:h-20 px-16 grid grid-cols-2 md:grid-cols-5 justify-between items-center fixed top-0 z-20 bg-white">
        <div className="logo-container col-span-1 h-full grid items-center">
          <Link to="/" className="text-3xl font-bold ">
            PET<span className="logo-2">FORCE</span>
          </Link>
        </div>
        <div className="col-span-3 hidden md:block h-full">
          <ul className="main-nav h-full flex justify-center items-center gap-10">
            <li>
              <Link className="nav-link" to="/">
                <span className="nav-icon">
                  <IoHomeOutline />
                </span>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="relative parent-navmenu">
              <Link className="nav-link" to="/services">
                <span className="nav-icon">
                  <IoPawOutline />
                </span>
                <span className="nav-text">Services</span>
              </Link>
              <ul className="dropdown-menu absolute left-0 top-full grid grid-cols-2 gap-x-12 gap-y-2 z-10">
                {services?.map((service) => (
                  <li key={service._id}>
                    <Link to={`/services/${service._id}`}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                <span className="nav-icon">
                  <IoPeopleOutline />
                </span>
                <span className="nav-text">About</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/blogs">
                <span className="nav-icon">
                  <RiPenNibLine />
                </span>
                <span className="nav-text">Blog</span>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                <span className="nav-icon">
                  <RiContactsLine />
                </span>
                <span className="nav-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-right grid col-span-1 justify-end">
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
      </div>

      <div className="fixed bottom-0 md:hidden block w-full h-28 px-20 items-center z-20 bg-white">
        <ul className="mobile-nav relative h-full flex justify-between items-center gap-10">
          <li>
            <Link className="nav-link" to="/">
              <span className="nav-icon">
                <IoHomeOutline />
              </span>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/services">
              <span className="nav-icon">
                <IoPawOutline />
              </span>
              <span className="nav-text">Services</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              <span className="nav-icon">
                <IoPeopleOutline />
              </span>
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/blogs">
              <span className="nav-icon">
                <RiPenNibLine />
              </span>
              <span className="nav-text">Blog</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              <span className="nav-icon">
                <RiContactsLine />
              </span>
              <span className="nav-text">Contact</span>
            </Link>
          </li>
          {/* <div className="indicator"></div> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
