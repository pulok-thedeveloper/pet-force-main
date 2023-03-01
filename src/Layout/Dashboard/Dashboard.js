import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
    const [activeNav, setActiveNav] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-6 relative">
        <div className="side-nav w-1/6 fixed bottom-0">
        <h1 className="font-semibold my-10 pl-7 text-xl">Dashboard</h1>
            <ul>
                <li onClick={()=>{setActiveNav(0)}} className={`${activeNav === 0 && 'active-dash-nav'}`}><Link className="block w-full pl-7 py-3" to='/dashboard'>My Profile</Link></li>
                <li onClick={()=>{setActiveNav(1)}} className={`${activeNav === 1 && 'active-dash-nav'}`}><Link className="block w-full pl-7 py-3" to='/dashboard/addservice'>Add Service</Link></li>
                <li onClick={()=>{setActiveNav(2)}} className={`${activeNav === 2 && 'active-dash-nav'}`}><Link className="block w-full pl-7 py-3" to='/dashboard/manageservice'>Manage Service</Link></li>
                <li onClick={()=>{setActiveNav(3)}} className={`${activeNav === 3 && 'active-dash-nav'}`}><Link className="block w-full pl-7 py-3" to='/dashboard/myreviews'>My Reviews</Link></li>
            </ul>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-5 mt-20">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
