import React from 'react';

// Reusable Task Card Component
const TaskCard = ({ title, desc, date, color }) => (
  <div className={`min-w-[250px] h-[250px] md:min-w-[300px] md:h-[300px] rounded-xl shadow-md text-white flex flex-col justify-between relative ${color} flex-shrink-0`}>
    <div className="flex justify-between text-sm absolute top-3 left-4 right-4">
      <span className="bg-black/50 px-2 py-1 rounded">{date}</span>
      <span className="bg-black/50 px-2 py-1 rounded">High</span>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center text-center px-2">
      <h2 className="text-lg md:text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm md:text-base">{desc}</p>
    </div>
    <div className="flex justify-center gap-4 pb-3">
      <button className="bg-white text-black font-semibold py-1 px-4 rounded hover:bg-gray-200 transition">Edit</button>
      <button className="bg-white text-black font-semibold py-1 px-4 rounded hover:bg-gray-200 transition">Delete</button>
    </div>
  </div>
);

// Active Task Component
export const ActiveTask = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold text-green-500 mb-2">Active Task</h1>
    <TaskCard
      title="Design Homepage"
      desc="Create layout and UI elements"
      date="28/Jul/2025"
      color="bg-green-700"
    />
  </div>
);

// Failed Task Component
export const FailedTask = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold text-red-500 mb-2">Failed Task</h1>
    <TaskCard
      title="Fix Critical Bug"
      desc="Resolve login crash issue"
      date="26/Jul/2025"
      color="bg-red-700"
    />
  </div>
);

// Completed Task Component
export const CompletedTask = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold text-blue-500 mb-2">Completed Task</h1>
    <TaskCard
      title="Deploy Website"
      desc="Website successfully deployed"
      date="25/Jul/2025"
      color="bg-blue-700"
    />
  </div>
);

// New Task Component
export const NewTask = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold text-yellow-500 mb-2">New Task</h1>
    <TaskCard
      title="Start Blog Setup"
      desc="Initiate new blog using Next.js"
      date="29/Jul/2025"
      color="bg-yellow-600"
    />
  </div>
);
