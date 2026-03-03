import React from "react";
import TeamSection from "./sectionsofmembers/TeamSection";
import primaryMembersImg from "./../../assets/primaryMembers.jpg";
const Members = () => {
  return (
    <div>

      {/* 🔹 Parallax Hero Section (Half Height) */}
      <div
        className="relative h-[75vh] bg-fixed bg-center bg-no-repeat bg-contain flex items-center justify-center "
        style={{ backgroundImage: `url(${primaryMembersImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Our Honorable Members
          </h1>
          <p className="text-md md:text-lg">
            Meet the dedicated people behind our foundation.
          </p>
        </div>
      </div>

      {/* 🔹 Members Section */}
      <div className="bg-gray-100 ">
        <TeamSection />
      </div>

    </div>
  );
};

export default Members;
