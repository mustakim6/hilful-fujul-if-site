import React from "react";
import nextaimherobg from "./../../../assets/heroBg.jpg";

const NextAimHero = () => {
  

  return (
    <div
      className="py-16  bg-center bg-repeat-x bg-white/50 bg-blend-soft-light text-center mb-6"
      style={{ backgroundImage: `url(${nextaimherobg})` }}
    >

      <p className="font-forBodyText font-medium text-activeNavlinkColor">
        OUR CURRENT MISSION
      </p>

      <h1 className="text-2xl md:text-5xl font-forHeading font-bold">Building Water Tube Well</h1>

    

    </div>
  );
};

export default NextAimHero;
