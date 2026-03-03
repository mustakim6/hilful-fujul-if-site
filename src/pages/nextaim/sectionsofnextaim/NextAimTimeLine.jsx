import React, { useState } from "react";
import { FaBullseye, FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import Button from './../../../components/buttons/Button';

const NextAimTimeLine = () => {
    // eslint-disable-next-line no-unused-vars
    const [complete, setComplete] = useState(true)
  return (
    <div>
      <div className="w-[80%] mx-auto my-4">
        <h1 className="text-xl md:text-4xl font-forHeading my-2 font-semibold">
          Why This Matters
        </h1>
        <div className="flex gap-2 items-center px-4 py-6 bg-[#EAF1EE] rounded-xl ">
          <FaBullseye className="text-2xl md:text-3xl text-activeNavlinkColor/80" />{" "}
          <p className="font-forBodyText">
            Many families in our village still lack access to clean drinking
            water. A tube well will serve over 50 families, providing safe water
            for drinking, cooking, and daily needs. This is not just
            infrastructure — it is a lifeline.
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto my-4">
        <h1 className="font-forHeading text-2xl md:text-4xl font-semibold">
          Project Timeline
        </h1>

        
                <div className=" border-l-16  border-activeNavlinkColor max-w-fit ml-6 space-y-4 my-4 rounded-l-md ">

                    <div className="flex  font-forBodyText items-center gap-1">
                       {complete? <FaCheckCircle className=" font-semibold  text-2xl" /> : <FaRegCircle className=" text-2xl font-semibold " /> } <p className="text-xl">Fund Collection</p>
                    </div>

                    <div className="flex font-forBodyText  gap-1">
                        <FaRegCircle className=" font-semibold items-center text-2xl" /><p className="text-xl">Purchase Materials</p>
                    </div>
                    <div className="flex  font-forBodyText  items-center gap-1">
                        <FaRegCircle className="font-semibold text-2xl" /><p className="text-xl">Implementation</p>
                    </div>

                    <div className="flex font-forBodyText items-center gap-1">
                        <FaRegCircle  className="font-semibold  text-2xl"/><p className="text-xl">Completion</p>
                    </div>
                

                </div>
                
            <div className="sticky bottom-0">
                <Button btnStyle='bg-activeNavlinkColor w-full text-white  font-forBodyText hover:shadow-xl' >Support This Aim</Button>
            </div>
      </div>
    </div>
  );
};

export default NextAimTimeLine;
