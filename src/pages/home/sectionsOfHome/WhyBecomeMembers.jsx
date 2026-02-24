import React from "react";
import { FaMoneyCheckAlt, FaBullseye, FaQuestionCircle, FaVoteYea } from "react-icons/fa";
import Button from "../../../components/buttons/Button";

const benefits = [
  {
    id: 1,
    icon: FaMoneyCheckAlt,
    title: "Access Fund Transparency",
    description:
      "View complete fund collection and spending details with full transparency.",
  },
  {
    id: 2,
    icon: FaBullseye,
    title: "Participate in Next Aim",
    description:
      "Take part in our ongoing and upcoming welfare missions for the village.",
  },
  {
    id: 3,
    icon: FaQuestionCircle,
    title: "Ask Questions in Education",
    description:
      "Engage in knowledge sharing and get answers from other members.",
  },
  {
    id: 4,
    icon: FaVoteYea,
    title: "Voting Rights (Coming Soon)",
    description:
      "Be part of decision making through member voting system (feature coming soon).",
  },
];

const WhyBecomeMembers = () => {
  return (
    <div className="py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold font-forHeading">
          Why Become a Member?
        </h2>
        <p className="text-gray-600 font-forBodyText mt-2 max-w-2xl mx-auto">
          Join our foundation and become part of a responsible and faith-driven community.
        </p>
      </div>

      {/* Benefit Cards */}
      <div className="grid gap-6 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.id}
              className="bg-[#F4F9F7] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <Icon className="text-3xl text-activeNavlinkColor" />
              </div>

              <h3 className="text-lg font-semibold font-forHeading mb-2">
                {benefit.title}
              </h3>

              <p className="text-sm text-gray-600 font-forBodyText">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="flex justify-center mt-12">
        <Button btnStyle="text-white bg-activeNavlinkColor px-6 py-3 text-lg hover:opacity-90 transition duration-300">
          Join Our Foundation
        </Button>
      </div>
    </div>
  );
};

export default WhyBecomeMembers;