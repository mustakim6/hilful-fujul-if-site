// Footer.jsx
import React from "react";
import { FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-activeNavlinkColor text-white pt-14 pb-6 relative">

      {/* Accent Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#F4B400]"></div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Foundation Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Hilfulfujul Islami Foundation
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Serving our village with faith, unity, and transparency.
              Together we build a stronger and compassionate community.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F4B400]">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-[#F4B400] group-hover:scale-110 transition" />
                <span>+880 1747542460</span>
              </div>

              <div className="flex items-center gap-3 group">
                <FaEnvelope className="text-[#F4B400] group-hover:scale-110 transition" />
                <span>hilfulfujul22@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 group">
                <FaFacebookF className="text-[#F4B400] group-hover:scale-110 transition" />
                <a href="https://web.facebook.com/profile.php?id=61564448822851" target='_blank' className="hover:text-[#F4B400] transition">
                  Facebook Page
                </a>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="md:text-right">
            <h3 className="text-xl font-semibold mb-4 text-[#F4B400]">
              Get Involved
            </h3>

            <div className="flex md:justify-end gap-4 flex-wrap">

              {/* Join Button */}
              <button className="bg-white text-activeNavlinkColor px-6 py-2 rounded-lg font-semibold hover:bg-[#F4B400] hover:text-white transition duration-300 shadow-md">
                Join Now
              </button>

              {/* Donate Button (Accent Highlight) */}
              <button className="bg-[#F4B400] text-activeNavlinkColor px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-activeNavlinkColor transition duration-300 shadow-md">
                Donate
              </button>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-gray-200 text-sm">
          © {new Date().getFullYear()} Hilfulfujul Islami Foundation. 
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;