import { useState } from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const AskQuestionCard = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [questions, setQuestions] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      author: "Rafiq Islam", // later this comes from logged-in user
      createdAt: new Date(),
    };

    setQuestions([newQuestion, ...questions]);

    // Clear form
    setFormData({
      title: "",
      description: "",
      category: "",
    });
  };

  const formatTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);

    if (seconds < 60) return "Just now";
    if (seconds < 3600) return Math.floor(seconds / 60) + " minutes ago";
    if (seconds < 86400) return Math.floor(seconds / 3600) + " hours ago";

    return Math.floor(seconds / 86400) + " days ago";
  };

  const categoryStyles = {
  Islamic: "text-green-600 bg-green-50",
  Technical: "text-blue-500 bg-blue-50",
  Social: "text-pink-500 bg-pink-50",
  Education: "text-purple-500 bg-purple-50",
  Other: "text-gray-600 bg-gray-100",
};

  return (
    <div className="flex  flex-col  p-4">
      <h1 className="text-xl md:text-3xl font-forHeading font-bold">
        Share Your Knowledge for Community
      </h1>
      {/* ask question section */}
      <div className="w-full  bg-white shadow-md  rounded-2xl p-6 space-y-5">
        <h2 className="text-2xl font-forHeading font-semibold text-gray-800">
          Ask a Question
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Question Title */}
          <div>
            <label className="block font-forHeading mb-1 font-medium text-gray-700">
              Question Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your question title"
              className="w-full font-forBodyText border border-gray-300 rounded-lg px-4 py-2 focus:outline-none bg-[#F6F9F7] focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-forHeading mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Explain your question in detail..."
              className="w-full border font-forBodyText bg-[#F6F9F7] border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block font-forHeading font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border font-forBodyText bg-[#F6F9F7] border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 "
              required
            >
              <option value="" disabled hidden>
                Select a category
              </option>
              <option value="Islamic">Islamic</option>
              <option value="Education">Education</option>
              <option value="Technical">Technical</option>
              <option value="Social">Social</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="max-w-fit font-forBodyText bg-[#0F6C4D] hover:bg-[#0c5a40] text-white py-2 px-6 rounded-lg font-semibold transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      <Link to='/answer'>
      {/*existing questions container */}
      <div className="mt-8 space-y-4 ">
        {questions.map((q) => (
          <div key={q.id} className="bg-white shadow-md hover:shadow-xl rounded-xl p-4 ">
            {/* Category */}
           <span
  className={`text-sm font-medium px-3 py-1 rounded-full 
    ${categoryStyles[q.category] || "text-gray-600 bg-gray-100"}`}
>
  {q.category}
</span>

            {/* Title */}
            <h3 className="text-lg font-forHeading font-semibold mt-1">{q.title}</h3>

            {/* Author + Time */}
            <div className="text-sm text-gray-500 mt-2 flex gap-4">
              <span>{q.author}</span>
              <span className="flex items-center gap-1">
                <FaClock></FaClock> {formatTimeAgo(q.createdAt)}
              </span>
            </div>
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
};

export default AskQuestionCard;
