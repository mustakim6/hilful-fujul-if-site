import React from "react";
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const NextAimProgress = () => {
    const requiredAmount = 60000;
      const totalCollectedAmount = 40000;
      const remainCollection = requiredAmount - totalCollectedAmount;
      console.log(remainCollection);
      const percentage = Math.min(
        (totalCollectedAmount / requiredAmount) * 100,
        100,
      );
      const percentageAmount = Number(percentage.toFixed(1));
    
      console.log(percentageAmount);

  return (
    <div className="bg-[#FFFFFF] rounded-xl shadow px-6 py-4 w-[80%] mx-auto">

{/* progress bar */}
      <div className="h-4 w-[90%] mx-auto rounded-xl bg-activeNavlinkColor/16 ">
        <div
          className="h-4 w-[50%] rounded-xl bg-activeNavlinkColor"
          style={{ width: `${percentageAmount}%` }}
        ></div>
      </div>

<div className=" flex justify-around my-2">
    <div >
        <h4 className="font-forBodyText">Required</h4>
        <p className="flex items-center font-bold"><FaBangladeshiTakaSign/>{ new Intl.NumberFormat().format(requiredAmount)}</p>
    </div>

    <div>
        <h4 className="font-forBodyText">Collected</h4>
        <p className="flex items-center text-activeNavlinkColor font-bold"><FaBangladeshiTakaSign/>{new Intl.NumberFormat().format(totalCollectedAmount)}</p>
    </div>
    <div>
        <h4 className="font-forBodyText">Remaining</h4>
        <p className="flex items-center text-accendColor font-bold"><FaBangladeshiTakaSign/>{new Intl.NumberFormat().format(remainCollection)}</p>
    </div>
</div>
    </div>
  );
};

export default NextAimProgress;
