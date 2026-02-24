import React from "react";
import FundOverview from "./sectionsOfFund/FundOverview";
import DonationSection from "./sectionsOfFund/DonationSection";


const Fund = () => {
  return (
    <div className="md:max-w-7xl mx-auto">
    <FundOverview></FundOverview>
    <DonationSection></DonationSection>
    </div>
  );
};

export default Fund;
