import React, { useState } from "react";
import PaymentGatewayBtn from "../../../components/buttons/PaymentGatewayBtn";
import bkash from "./../../../assets/BKash.png";
import nagad from "./../../../assets/nagad.png";
import rocket from "./../../../assets/rocket.webp";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const DonationSection = () => {
  const [inputDonationAmount, setInputDonationAmount] = useState(0);

  console.log(inputDonationAmount);
  return (
    <div className="bg-[#FFFFFF] border border-gray-200 rounded-md px-4 my-4">
      <div className="space-y-4 ">
        <h1 className="font-forHeading font-semibold">Make a Donation</h1>
        <p>Amount</p>
        <div className="text-md font-semibold flex space-x-2">
          {[20, 30, 50, 100, 500].map((amount) => (
            <span
              key={amount}
              onClick={() => setInputDonationAmount(amount)}
              className={`px-4  py-1 rounded-lg border border-gray-400 cursor-pointer transition-all duration-200 flex items-center
        ${
          inputDonationAmount === amount
            ? "bg-[#0F6C4D] text-white"
            : "bg-white text-black hover:bg-accendColor hover:text-white"
        }`}
            >
              {amount} <FaBangladeshiTakaSign className="text-sm" />
            </span>
          ))}
        </div>
        <input
          type="number"
          onChange={(e) => setInputDonationAmount(Number(e.target.value))}
          value={inputDonationAmount}
          className="input input-lg w-full bg-[#F6F9F7]  border-accendColor"
        />
      </div>

      <div className="my-4">
        <h3 className="font-forBodyText font-medium">Payment Method</h3>
        {/* 3 paymentGateway buttons */}
        <div className="grid grid-cols-3 gap-6 ">
          <PaymentGatewayBtn
            pamentGatewayName="bKash"
            color="E4136E"
            icon={bkash}
          ></PaymentGatewayBtn>
          <PaymentGatewayBtn
            color="F69225"
            pamentGatewayName="Nagad"
            icon={nagad}
          ></PaymentGatewayBtn>
          <PaymentGatewayBtn
            color="8C3494"
            pamentGatewayName="Rocket"
            icon={rocket}
          ></PaymentGatewayBtn>
        </div>
        {/* Donate button */}
        <button
          className={`mt-4 text-center text-white font-forBodyText font-bold w-full py-3 rounded-md hover:cursor-pointer ${inputDonationAmount > 0 ?  "bg-[#0F6C4D]" : "bg-[#87B5A6]"}`}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationSection;
