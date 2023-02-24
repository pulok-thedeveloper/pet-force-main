import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="px-16">
      <div className="py-16 grid lg:grid-cols-4 justify-center gap-10">
        <div>
          <div className="logo-container mb-5">
            <Link to="/" className="text-3xl font-bold ">
              PET<span className="logo-2">FORCE</span>
            </Link>
          </div>
          <p className="mb-5 leading-loose">
          This prodigiously grew tortoise charact stupidly pernicious jeepers along while accordingly under useful much salacious walking fars before some supp aesthetically wow shuddered.
          </p>
          <div className="social-icons flex gap-3">
            <Link to="/" className="rounded-full p-2">
              <FaFacebookF className="social-icon" />
            </Link>
            <Link to="/" className="rounded-full p-2">
              <FaTwitter className="social-icon" />
            </Link>
            <Link to="/" className="rounded-full p-2">
              <FaInstagram className="social-icon" />
            </Link>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold pb-3 mb-7 border-b-2">
            Address
          </h3>
          <ul className="grid gap-3">
            <li className="flex gap-3 items-center"><MdLocationPin className="address-icon"/> 32 BellSouth, Harley Street Florida</li>
            <li className="flex gap-3 items-center"><FaPhoneAlt className="address-icon"/>+(1) 234 567 8900</li>
            <li className="flex gap-3 items-center"><FaEnvelope className="address-icon"/>support@petforce.com</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold pb-3 mb-7 border-b-2">
            Our Services
          </h3>
          <ul className="grid gap-3">
            <li>
              <Link to="/">Bath & Brush</Link>
            </li>
            <li>
              <Link to="/">Cleaning & Plucking</Link>
            </li>
            <li>
              <Link to="/">Trim & Groom</Link>
            </li>
            <li>
              <Link to="/">Coat Handler</Link>
            </li>
            <li>
              <Link to="/">Hair Styling</Link>
            </li>
            <li>
              <Link to="/">Teeth Brushed</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold pb-3 mb-7 border-b-2">
            Get In Touch
          </h3>

          <p className="mb-10 leading-loose">One jeepers along while do accord under useful much darn.</p>
          <form className="">
            <input className="w-full mb-3 input-email py-3 px-5 rounded-full" type="email" placeholder="Email address" />
            <input className="w-full subscribe-btn py-2 rounded-full text-white uppercase font-semibold cursor-pointer" type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
      <p className="py-8 text-center border-t">
        Copyright &copy; 2023 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
