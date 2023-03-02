import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/useTitle";

const About = () => {
    useTitle('About');

  return (
    <div className=" grid md:grid-cols-2 items-center gap-16 mt-20 px-16 py-10">
      <div>
        <img
          src="http://www.shmai.com/preview/pawrex-html/images/resource/welcome.jpg"
          alt=""
        />
      </div>
      <div className="grid gap-7">
        <h2 className="text-4xl font-semibold">Welcome to PetForce</h2>
        <p className="text-sm leading-relaxed">
          Broadcast neglectful and poignantly well until and some listlessly
          amidst suc cessful concentrically ably dachshund more far but
          forwardly echidna outside tiger split thanks far vibrantly gosh hence
          pangolin however notwithstanding leapt untruthful gauchely yikes
          komodo dully more.
        </p>
        <p className="text-sm leading-relaxed">
          As abandoned winced this more far wow jeepers near more wow goodness
          so revealed much along worm some grasshopper.
        </p>
        <ul className="about-list text-sm leading-relaxed font-semibold">
          <li>Abore et dolore magna aliqua ut enim veniam</li>
          <li>Quis nostrud exercitation ullamco laboris nisi aliquip</li>
          <li>Eiusmod tempor incididunt labore.</li>
        </ul>
        <div>
          <Link
            to="/service"
            className="primary-btn py-2 px-5 rounded-full text-white font-semibold text-lg"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
