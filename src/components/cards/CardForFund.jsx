/* eslint-disable no-unused-vars */
import React from "react";


// {arroIcon, carTitle, amount}
const CardForFund = ({fundIcon:FundIcon, fundTitle, fundAmount}) => {
  

  // function for formatting currency in bd format.
  const formatCurrency = (amount)=>new Intl.NumberFormat("en-BD", {
    style: 'currency',
    currency: 'BDT',
    
  }).format(amount)


  return (
    <div className="flex gap-2 pl-4 pr-10 my-4  py-2 bg-[#FFFFFF] shadow w-full rounded-lg">

      <div className="px-2 py-2 rounded-xl bg-activeNavlinkColor/10 max-w-fit">
        <FundIcon className="text-activeNavlinkColor   text-4xl"/>
      </div>
      <div>
        <h1 className="font-semibold text-sm text-gray-600">{fundTitle}</h1>
        <p className="font-bold">{formatCurrency(fundAmount)}</p>
      </div>
    </div>
  );
};

export default CardForFund;
