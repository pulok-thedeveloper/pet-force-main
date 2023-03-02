import React, { useState } from "react";
import Headericon from "../../../Assets/title-icon.png";
import ex1 from '../../../Assets/Expertise/dog-in-front-of-a-man.png';
import ex1_alt from '../../../Assets/Expertise/dog-in-front-of-a-man-alt.png';
import ex2 from '../../../Assets/Expertise/bath-tub.png';
import ex2_alt from '../../../Assets/Expertise/bath-tub-alt.png';
import ex3 from '../../../Assets/Expertise/consultation.png';
import ex3_alt from '../../../Assets/Expertise/consultation-alt.png';
import './Expertise.css';

const Expertise = () => {
    const [active, setActive] = useState(0);

  return (
    <div className="grid justify-items-center bg-white py-16">
      <div className="mb-5">
        <img src={Headericon} alt="" />
      </div>
      <h1 className="section-title font-semibold mb-3">
        All Grooming Services
      </h1>
      <p className="section-decription">
        For professional dog and cat grooming needs Fanatic clearly
      </p>
      <div className="grid sm:grid-cols-3 px-28 md:px-16 mt-10 gap-10 text-center">
        <div onMouseOver={()=>setActive(1)} onMouseOut={()=>setActive(0)} className="exp-card grid justify-items-center">
            <div className="exp-icon rounded-full mb-10 grid place-items-center">
                <img className="w-3/5 md:w-full" src={active===1? ex1_alt: ex1} alt=''/>
            </div>
            <h3 className="exp-title text-lg font-semibold mb-3 cursor-pointer">Experienced Staff</h3>
            <p className="exp-description leading-relaxed">Well gaudy hound hired set flailed much followed less this maternal well unavoidable crudely aloof more save groomed.</p>
        </div>
        <div onMouseOver={()=>setActive(2)} onMouseOut={()=>setActive(0)}  className="exp-card grid justify-items-center">
            <div className="exp-icon rounded-full mb-10 grid place-items-center">
                <img className="w-3/5 md:w-full" src={active===2? ex2_alt: ex2} alt=''/>
            </div>
            <h3 className="exp-title text-lg font-semibold mb-3 cursor-pointer">Top Class Facilities</h3>
            <p className="exp-description leading-relaxed">Well gaudy hound hired set flailed much followed less this maternal well unavoidable crudely aloof more save groomed.</p>
        </div>
        <div onMouseOver={()=>setActive(3)} onMouseOut={()=>setActive(0)}  className="exp-card grid justify-items-center">
            <div className="exp-icon rounded-full mb-10 grid place-items-center">
                <img className="w-3/5 md:w-full" src={active===3? ex3_alt: ex3} alt=''/>
            </div>
            <h3 className="exp-title text-lg font-semibold mb-3 cursor-pointer">Easy Consultaion</h3>
            <p className="exp-description leading-relaxed">Well gaudy hound hired set flailed much followed less this maternal well unavoidable crudely aloof more save groomed.</p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
