Learna new thin like show.jsx inside 

import React from 'react';

const ShowCard = () => {
  const card = {
    date: "28/Jul/2025",
    priority: "High",
    channel: "Active Task",
    desc: "This task is currently in progress.",
    color: "bg-green-600",
  };

  return (
    <div className="p-4">
      <div className={`min-w-[250px] h-[250px] md:min-w-[300px] md:h-[300px] rounded-xl shadow-md text-white flex flex-col justify-between relative ${card.color} flex-shrink-0`}>
        {/* Top: Date & Priority */}
        <div className="flex justify-between text-sm absolute top-3 left-4 right-4">
          <span className="bg-black/50 px-2 py-1 rounded">{card.date}</span>
          <span className="bg-black/50 px-2 py-1 rounded">{card.priority}</span>
        </div>

        {/* Middle: Task Info */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-2">
          <h2 className="text-lg md:text-xl font-bold mb-2">{card.channel}</h2>
          <p className="text-sm md:text-base">{card.desc}</p>
        </div>

        {/* Bottom: Buttons */}
        <div className="flex justify-around pb-4">
          <button className="bg-white text-black font-semibold py-1 px-4 rounded hover:bg-gray-200 transition">Done</button>
          <button className="bg-white text-black font-semibold py-1 px-4 rounded hover:bg-gray-200 transition">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;







multiple card use diffrent way

import React from 'react';

const Card = ({ date, priority, channel, desc, color }) => (
  <div className={`min-w-[250px] h-[250px] md:min-w-[300px] md:h-[300px] rounded-xl shadow-md text-white  flex flex-col justify-between relative ${color} flex-shrink-0`}>
    <div className="flex justify-between text-sm absolute top-3 left-4 right-4">
      <span className="bg-black/50 px-2 py-1 rounded">{date}</span>
      <span className="bg-black/50 px-2 py-1 rounded">{priority}</span>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center text-center px-2">
      <h2 className="text-lg md:text-xl font-bold mb-2">{channel}</h2>
      <p className="text-sm md:text-base">{desc}</p>
    </div>
    <button className="bg-white text-black font-semibold py-1 px-4 rounded mt-2 mx-auto hover:bg-gray-200 transition">
      Visit Channel
    </button>
  </div>
);

const ShowCard = () => {
  const data = [
    {
      date: "01/Jul/2025",
      priority: "High",
      channel: "CodeWithNajim",
      desc: "Learn full-stack web dev in Hindi!",
      color: "bg-red-600",
    },
    {
      date: "05/Jul/2025",
      priority: "High",
      channel: "Tech Simplified",
      desc: "Frontend dev made easy.",
      color: "bg-blue-700",
    },
    {
      date: "10/Jul/2025",
      priority: "High",
      channel: "JS for Life",
      desc: "Master JavaScript step by step.",
      color: "bg-green-700",
    },
    {
      date: "15/Jul/2025",
      priority: "High",
      channel: "React Hustle",
      desc: "Build cool UIs using React.",
      color: "bg-purple-700",
    },
    {
      date: "20/Jul/2025",
      priority: "High",
      channel: "Code Daily",
      desc: "Short daily dev tips.",
      color: "bg-pink-700",
    },
    {
      date: "22/Jul/2025",
      priority: "High",
      channel: "Web Builder",
      desc: "Live projects + theory.",
      color: "bg-yellow-600",
    },
    {
      date: "25/Jul/2025",
      priority: "High",
      channel: "DevTalks",
      desc: "Interviews, tips, and more!",
      color: "bg-orange-600",
    },
    {
      date: "27/Jul/2025",
      priority: "High",
      channel: "Najim Shorts",
      desc: "1-minute coding lessons.",
      color: "bg-teal-700",
    },
  ];

  return (
    <div id={"card"} className=" w-full">
      <h1 className="text-2xl font-bold mb-4 text-white">Recommended Channels</h1>
      <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4">
        {data.map((card, idx) => (
          <Card
            key={idx}
            date={card.date}
            priority={card.priority}
            channel={card.channel}
            desc={card.desc}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCard;

import React, { useState } from 'react';

const Failed = () => {
  const [showAuthor, setShowAuthor] = useState(false);

  return (
    <div className="max-w-sm w-full bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white rounded-2xl p-6 shadow-2xl transition-all duration-300">
      {/* Badge */}
      <span className="bg-black/40 px-3 py-1 text-xs rounded-full absolute mt-[-20px] ml-[-20px]">High</span>

      {/* Card content */}
      <div className="flex flex-col gap-7">
        <h2 className="text-xl font-bold tracking-wide">Task Failed 🚫</h2>
        <p className="text-sm opacity-90">
          This task could not be completed due to unexpected errors. Please check logs and retry.
        </p>

        {/* Action button */}
        <button
          onClick={() => setShowAuthor(!showAuthor)}
          className="bg-white text-red-700 font-semibold px-4 py-2 rounded-lg shadow-md hover:scale-105 hover:bg-gray-200 active:scale-95 transition"
        >
          {showAuthor ? 'Hide Author' : 'Show Author'}
        </button>

        {/* Author reveal */}
        {showAuthor && (
          <div className="mt-2 text-sm bg-red-900/50 p-3 rounded-lg transition-opacity duration-500">
            <p className="font-medium">Author: Najim Khan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Failed;