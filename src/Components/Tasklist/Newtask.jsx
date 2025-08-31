import React, { useState } from "react";

const Failed = ({data}) => {
  const [showAuthor, setShowAuthor] = useState(false);

  const toggleAuthor = () => {
    setShowAuthor(!showAuthor);
  };

  return (
    <div className="w-[360px] md:w-[430px] h-[300px] md:h-[300px] rounded-2xl shadow-xl text-white p-5 bg-gradient-to-br from-violet-500 via-blue-600 to-blue-700 relative overflow-hidden transition-all duration-500 group hover:scale-105">

      {/* Date - Top Left */}
      <span className="absolute top-4 left-4 bg-white/20 text-xs px-3 py-1 rounded-full font-medium tracking-wide">
     {data.date}
      </span>

      {/* Priority - Top Right */}
      <span className="absolute top-4 right-4 bg-black/70 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide shadow-md">
        High
      </span>

      {/* Main Content */}
      <div className="flex flex-col justify-start h-full mt-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">{data.title}</h2>
          <p className="text-sm md:text-sm text-white/90 mb-4">
          {data.desc}
          </p>
        </div>

        {/* Button & Author Reveal */}
        <div>
          <button
            onClick={toggleAuthor}
            className="bg-white text-green-900 font-semibold py-2 px-4 rounded-xl shadow hover:bg-green-100 active:scale-95 transition-all duration-300"
          >
            {showAuthor ? "Hide Author" : "Show Author"}
          </button>

          {/* Author */}
          {showAuthor && (
            <p className="mt-2 text-black/90 text-sm md:text-base">
              Author: <span className="font-bold">Najim Khan</span>
            </p>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
    </div>
  );
};

export default Failed;
