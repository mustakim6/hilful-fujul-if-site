import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHamburger, FaHome } from "react-icons/fa";
import { FaCross, FaMoneyCheck } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { GoGoal } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { ImMenu } from "react-icons/im";

import { GrClose } from "react-icons/gr";


import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


const Navbar = () => {

   const [isLight, setIsLight] =useState(true)
   const [isEn, setIsEn] =useState(true)
   const [menuClose, setMenuClose] = useState(true)


// navbar links are here as an array of object
  const links = [
    { to: "/", linkName: "Home", linkIcon:<FaHome /> },
    { to: "/fund", linkName: "Fund", linkIcon:<FaMoneyCheck /> },
    { to: "/education", linkName: "Education", linkIcon:<FaBookOpenReader /> },
    { to: "/members", linkName: "Members", linkIcon:<HiUserGroup /> },
    { to: "/nextaim", linkName: "Next Aim", linkIcon:<GoGoal /> },
    { to: "/contactus", linkName: "Contact Us", linkIcon:<BsTelephone /> },

  ];


  return (
    <nav className=" py-4 bg-navBarBgColor relative flex items-center justify-around hover:border-b-2 border-gray-300">

{/* logo */}
 <div className=" md:flex gap-1 border-3 max-w-fit items-center">
    <div
     className=" mx-1 bg-activeNavlinkColor p-2 rounded-full text-white font-semibold max-w-fit">
      HFIF
    </div>
    <h2 className="font-bold "> 
    Hilful Fujul Islami Foundation</h2>
   </div>

{/* navlinks */}
      <ul className={`absolute top-600 md:top-0 bg-amber-300`}>
        {links.map((link) => (
          <li key={link.to} className="max-w-fit my-2  ">

            <NavLink
              to={link.to}
              className={({ isActive }) =>
                ` text-2xl flex gap-1 rounded-xl p-2 items-center transition-all duration-450  ${isActive ? "text-white bg-activeNavlinkColor " : "hover:bg-navHoverColor"}`
              }
            >

             {link.linkIcon} {link.linkName}
             
            </NavLink>

          </li>
        ))}
      </ul>

{/* theme and language toggle */}
        <div className="flex gap-4">
            {/* theme toggle */}
            <div 
            className=" cursor-pointer border-3 max-w-fit text-3xl  "
            onClick={()=>setIsLight(prev=>!prev)}>
                {isLight? <MdDarkMode /> : <MdLightMode />}
            </div>

            {/* language toggle */}
            <div 
            className="cursor-pointer border-3 max-w-fit text-2xl font-bold "
            onClick={()=>setIsEn(prev=>!prev)}>
                {isEn? "BN" : "EN"}
            </div>
        </div>

{/* hamburger menu */}

<div className=" text-3xl ml-2 border-3"
onClick={()=>setMenuClose(prev=>!prev)}>
    {menuClose? <ImMenu />: <GrClose />}
</div>

    </nav>
  );
};

export default Navbar;
