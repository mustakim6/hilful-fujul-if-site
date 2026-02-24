import React, { useEffect, useState } from "react";

const ImpactCard = ({ title, targetNumber, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation time
    const increment = targetNumber / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [targetNumber]);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
      <h2 className="text-3xl md:text-4xl font-bold text-activeNavlinkColor">
        {count}
        {suffix}
      </h2>
      <p className="text-gray-600 mt-2 font-forBodyText">{title}</p>
    </div>
  );
};

const Impacts = () => {
  return (
    <div className="py-16 bg-[#F4F9F7]">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold font-forHeading">
          Our Impact
        </h2>
        <p className="text-gray-600 font-forBodyText mt-2">
          Together we are making a real difference in our village.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        <ImpactCard title="Total Funds Collected" targetNumber={250000} suffix="৳" />
        <ImpactCard title="Active Members" targetNumber={85} />
        <ImpactCard title="Completed Projects" targetNumber={12} />
        <ImpactCard title="Current Next Aim" targetNumber={1} />
      </div>
    </div>
  );
};

export default Impacts;