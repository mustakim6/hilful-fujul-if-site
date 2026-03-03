// DirectContact.jsx
import React from "react";

const DirectContact = () => {
  return (
    <div className="bg-activeNavlinkColor text-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        Direct Contact
      </h2>

      <div className="space-y-6">

        {/* Phone */}
        <div>
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="mt-1 text-gray-200">
            +880 1747542460
          </p>
        </div>

        {/* Email */}
        <div>
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="mt-1 text-gray-200">
            hilfulfujul22@gmail.com
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-lg">Village Address</h3>
          <p className="mt-1 text-gray-200 leading-relaxed">
            গ্রাম: হালুয়া রাজার চহট্ট, <br /> উপজেলা: জামালপুর সদর, <br />জেলা: জামালপুর
          </p>
        </div>

      </div>
    </div>
  );
};

export default DirectContact;