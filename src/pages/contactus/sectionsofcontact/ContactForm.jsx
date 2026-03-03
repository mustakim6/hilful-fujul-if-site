// ContactForm.jsx
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="bg-[#FFFF] p-8 rounded-2xl shadow-lg">
      

      <form className="space-y-5">
        {/* Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-activeNavlinkColor"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            placeholder="Your phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-activeNavlinkColor"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-activeNavlinkColor"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-activeNavlinkColor text-white py-3 rounded-lg font-semibold hover:bg-[#0c5a42] transition duration-300"
        >
         <FaTelegramPlane/>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;