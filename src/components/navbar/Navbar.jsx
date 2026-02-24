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

    <nav className=" py-1 bg-navBarBgColor relative flex items-center justify-evenly
     border-b-2 border-gray-300 font-forBodyText text-md">

{/* logo */}
 <div className=" flex gap-1 max-w-fit items-center">
    <div
     className=" mx-1 bg-activeNavlinkColor p-2 rounded-full text-white  font-semibold max-w-fit">
      HFIF
    </div>
    <h2 className="font-bold grow"> 
    Hilful Fujul Islami Foundation</h2>
   </div>

{/* navlinks  for mobile device*/}
      <ul className={`absolute ${menuClose? '-top-400': 'top-16 right-[30%] transition-all duration-700 ' }    bg-[#F4F9F7] rounded-md w-60 flex shadow-2xl `}>

        <div className=" mx-auto ">
            {links.map((link) => (
          <li key={link.to} className="max-w-fit my-2  ">

            <NavLink
              to={link.to}
              onClick={()=>setMenuClose(true)}
              className={({ isActive }) =>
                ` text-sm font-medium flex gap-1 rounded-xl p-2 items-center transition-all duration-450  ${isActive ? "text-white bg-activeNavlinkColor " : "hover:bg-navHoverColor"}`
              }
            >

             {link.linkIcon} {link.linkName}
             
            </NavLink>

          </li>
        ))}
        </div>
      </ul>

{/* navlinks  for large device */}
      <ul className=' hidden md:block'>

        <div className=" flex gap-4 font-medium">
            {links.map((link) => (
          <li key={link.to} className="max-w-fit my-2  ">

            <NavLink
              to={link.to}
              className={({ isActive }) =>
                ` font-medium  flex gap-1 rounded-xl px-1 py-2 items-center transition-all duration-450  ${isActive ? "text-white bg-activeNavlinkColor " : "hover:bg-navHoverColor"}`
              }
            >

             {link.linkIcon} {link.linkName}
             
            </NavLink>

          </li>
        ))}
        </div>
      </ul>

{/* theme and language toggle */}
        <div className="flex items-center gap-4">
            {/* theme toggle */}
            <div 
            className=" cursor-pointer border border-slate-400 p-1 rounded-xl hover:shadow-[0px_0px_6px_1px_#0E6B4F] max-w-fit size-9 text-2xl transition-all duration-500 "
            onClick={()=>setIsLight(prev=>!prev)}>
                {isLight? <MdDarkMode /> : <MdLightMode />}
            </div>

            {/* language toggle */}
            <div 
            className="cursor-pointer border border-slate-400 p-1 rounded-xl max-w-fit text-xl size-9 text font-bold  hover:shadow-[0px_0px_6px_1px_#0E6B4F] transition-all duration-500"
            onClick={()=>setIsEn(prev=>!prev)}>
                {isEn? "BN" : "EN"}
            </div>
        </div>

{/* hamburger menu toggle */}
<div className="md:hidden text-3xl ml-2 "
onClick={()=>setMenuClose(prev=>!prev)}>
    {menuClose? <ImMenu />: <GrClose />}
</div>

    </nav>
  );
};

export default Navbar;
