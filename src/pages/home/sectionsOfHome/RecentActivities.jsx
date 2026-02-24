import React from "react";
// import activity1 from "./../../../assets/activity1.jpg";
// import activity2 from "./../../../assets/activity2.jpg";
// import activity3 from "./../../../assets/activity3.jpg";

const activities = [
  {
    id: 1,
    image: 'activity1',
    title: "Winter Blanket Distribution",
    description:
      "Distributed warm blankets to poor families during winter season.",
  },
  {
    id: 2,
    image: 'activity2',
    title: "Food Support Program",
    description:
      "Provided monthly food packages to families in need.",
  },
  {
    id: 3,
    image: 'activity3',
    title: "Mosque Cleaning Campaign",
    description:
      "Organized volunteer team to clean and maintain village mosque.",
  },
];

const RecentActivities = () => {
  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold font-forHeading">
          Recent Activities
        </h2>
        <p className="text-gray-600 font-forBodyText mt-2">
          Some of our latest welfare works in the village.
        </p>
      </div>

      <div className="grid gap-6 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-[#F4F9F7] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold font-forHeading mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm font-forBodyText mb-4">
                {activity.description}
              </p>

              <button className="text-activeNavlinkColor font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;