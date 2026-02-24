import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Abdul Karim",
    feedback:
      "This foundation has truly changed our village. May Allah bless everyone involved.",
  },
  {
    id: 2,
    name: "Rahima Khatun",
    feedback:
      "Their food support program helped my family during difficult times.",
  },
  {
    id: 3,
    name: "Imran Hossain",
    feedback:
      "Young brothers are doing amazing work for our community.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-[#F4F9F7]">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold font-forHeading">
          What People Say
        </h2>
        <p className="text-gray-600 font-forBodyText mt-2">
          Feedback from our village community.
        </p>
      </div>

      <div className="grid gap-6 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <p className="text-gray-700 font-forBodyText italic mb-4">
              “{item.feedback}”
            </p>
            <h4 className="font-semibold text-activeNavlinkColor">
              — {item.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;