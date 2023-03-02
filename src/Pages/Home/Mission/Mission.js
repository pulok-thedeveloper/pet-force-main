import React from "react";
import "./Mission.css";
import misson_img from "../../../Assets/mission.jpg";
import signature from '../../../Assets/signature.png';

const Mission = () => {
  return (
    <div className="our-mission lg:min-h-screen grid lg:grid-cols-2 items-center gap-16 p-16 text-white">
      <div>
        <img src={misson_img} alt="" />
      </div>
      <div className="grid gap-7">
        <h2 className="text-4xl font-semibold">Our Mission</h2>
        <p className="text-sm leading-relaxed">Broadcast neglectful and poignantly well until and some listlessly amidst suc cessful concentrically ably dachshund more far but forwardly echidna outside tiger split thanks far vibrantly gosh hence pangolin however notwithstanding leapt untruthful gauchely yikes komodo dully more.</p>
        <ul className="mission-list text-sm leading-relaxed font-semibold">
            <li>Abore et dolore magna aliqua ut enim veniam</li>
            <li>Quis nostrud exercitation ullamco laboris nisi aliquip</li>
            <li>Eiusmod tempor incididunt labore.</li>
        </ul>
        <div>
            <img src={signature} alt=''/>
            <h3 className="font-bold mt-3">PETFORCE CEO</h3>
        </div>
      </div>
    </div>
  );
};

export default Mission;
