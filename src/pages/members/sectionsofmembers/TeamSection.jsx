import { useState } from "react";
import { IoClose } from "react-icons/io5";

const teamMembers = [
  {
    id: 1,
    name: "Abdul Rahman",
    role: "Admin",
    bio: "Head of the organization with 10+ years of experience.",
    joined: "2020-01-15",
    avatar: "/path/to/abdul.jpg",
  },
  {
    id: 2,
    name: "Kamal Hossain",
    role: "Treasurer",
    bio: "Manages finances and ensures transparency.",
    joined: "2019-05-10",
    avatar: "/path/to/kamal.jpg",
  },
  {
    id: 3,
    name: "Rafiq Islam",
    role: "Volunteer",
    bio: "Helps in community outreach programs.",
    joined: "2021-03-20",
    avatar: "/path/to/rafiq.jpg",
  },
  {
    id: 4,
    name: "Rafiq Islam",
    role: "Volunteer",
    bio: "Helps in community outreach programs.",
    joined: "2021-03-20",
    avatar: "/path/to/rafiq.jpg",
  },
  {
    id: 5,
    name: "Rafiq Islam",
    role: "Volunteer",
    bio: "Helps in community outreach programs.",
    joined: "2021-03-20",
    avatar: "/path/to/rafiq.jpg",
  },
  
  {
    id: 6,
    name: "Rafiq Islam",
    role: "Volunteer",
    bio: "Helps in community outreach programs.",
    joined: "2021-03-20",
    avatar: "/path/to/rafiq.jpg",
  },
  
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-center">Meet Our Brothers</h1>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all text-center"
          >
            <div className="text-xl font-medium">{member.name}</div>
            <div className="text-gray-500">{member.role}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
{selectedMember && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl">
      {/* Close Icon */}
      <button
        onClick={() => setSelectedMember(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <IoClose size={28} />
      </button>

      {/* Profile Picture */}
      {selectedMember.avatar && (
        <div className="flex justify-center mb-4">
          <img
            src={selectedMember.avatar}
            alt={selectedMember.name}
            className="w-28 h-28 rounded-full object-cover shadow-md"
          />
        </div>
      )}

      {/* Member Details */}
      <h2 className="text-3xl font-semibold text-center mb-1">{selectedMember.name}</h2>
      <p className="text-center text-gray-500 mb-2">{selectedMember.role}</p>
      <p className="text-center text-gray-400 mb-4 text-sm">Joined on {selectedMember.joined}</p>
      <p className="text-gray-700 text-center">{selectedMember.bio}</p>
    </div>
  </div>
)}
    </div>
  );
};

export default TeamSection;