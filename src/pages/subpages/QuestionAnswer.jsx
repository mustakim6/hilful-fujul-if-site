import React from 'react';
 import { useState } from "react";
import { useNavigate } from "react-router-dom";


const QuestionAnswer = () => {
  

  const [answers, setAnswers] = useState([
    {
      id: 1,
      text: "This is a sample answer. Detailed information would be provided here.",
      author: "Rafiq Islam",
    },
    {
      id: 2,
      text: "This is a sample answer. Detailed information would be provided here.",
      author: "Rafiq Islam",
    },
  ]);

  const [newAnswer, setNewAnswer] = useState("");
const navigate = useNavigate();
  const handleSubmitAnswer = () => {
    if (!newAnswer.trim()) return;

    const answer = {
      id: Date.now(),
      text: newAnswer,
      author: "Rafiq Islam",
    };

    setAnswers([...answers, answer]);
    setNewAnswer("");
  };

  const categoryStyles = {
    Islamic: "text-green-600 bg-green-50",
    Education: "text-purple-600 bg-purple-50",
    Technical: "text-blue-500 bg-blue-50",
    Social: "text-pink-500 bg-pink-50",
    Other: "text-gray-600 bg-gray-100",
  };

  const category = "Education";

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
<button
  onClick={() => navigate(-1)}
  className="text-sm font-medium text-green-700 hover:text-green-800 flex items-center gap-2"
>
  ← Back
</button>
      {/* Question Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-3">

        {/* Category */}
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full 
          ${categoryStyles[category]}`}
        >
          {category}
        </span>

        {/* Sub Category */}
        <p className="text-sm text-gray-500">islamic</p>

        {/* Title */}
        <h2 className="text-2xl font-semibold">
          How to perform Salat al-Istikhara?
        </h2>

        {/* Description */}
        <p className="text-gray-700">
          I want to know the correct method and dua for Istikhara prayer.
        </p>

        {/* Author */}
        <div className="text-sm text-gray-500">
          Asked by <span className="font-medium text-gray-700">Rafiq Islam</span>
          <span className="ml-3">2 hours ago</span>
        </div>
      </div>

      {/* Answers Section */}
      <div className="space-y-4">
        {answers.map((answer) => (
          <div
            key={answer.id}
            className="bg-white border rounded-xl p-4 space-y-2 shadow-sm"
          >
            <p className="text-gray-700">{answer.text}</p>

            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-700">
                {answer.author}
              </span>

              <button className="text-green-600 hover:text-green-700 font-medium">
                Mark as Helpful
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Write Answer */}
      <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
        <textarea
          rows="4"
          placeholder="Write your answer..."
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>

        <button
          onClick={handleSubmitAnswer}
          className="bg-[#0F6C4D] hover:bg-[#0c5a40] text-white px-6 py-2 rounded-lg font-semibold transition-all"
        >
          Submit Answer
        </button>
      </div>

    </div>
  );

};

export default QuestionAnswer;