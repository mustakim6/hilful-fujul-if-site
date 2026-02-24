import React from "react";
import herobg from './../../../assets/heroBg.jpg'
import Button from "../../../components/buttons/Button";

const Hero = () => {
  return (
    <div  className=" py-16  bg-center bg-repeat-x bg-white/50 bg-blend-soft-light "
    style={{backgroundImage : `url(${herobg})`}}>

     <div className="text-center px-4 leading-6 md:leading-10">
         <h1 className="text-3xl md:text-5xl  font-forHeading font-bold">
        Serving Our Village With Faith & Responsibility
      </h1>
      <p className="text-md text-gray-600 font-forBodyText">
        Building a stronger community through unity, transparency, and
        compassion.
      </p>
     </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-2 font-forBodyText my-1">
        <Button btnStyle='text-white bg-activeNavlinkColor '>Become a Member</Button>
        <Button btnStyle='text-[#0E6B4F] hover:bg-activeNavlinkColor hover:text-white transition-all duration-300 border hover:border-activeNavlinkColor' > Donate Now</Button>
      </div>

    </div>
  );
};

export default Hero;
