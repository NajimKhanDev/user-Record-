import React from "react";

const Alltask = () => {
  const taskData = [
    { name: "Nazeem", topic: "Landing Page", design: "Create a modern landing page UI with responsive layout.", status: "Active", bgColor: "from-rose-400 to-pink-500" },
    { name: "Ayaan", topic: "Login Form", design: "Design a clean and user-friendly login form with validation.", status: "Pending", bgColor: "from-emerald-400 to-green-500" },
    { name: "Fatima", topic: "Dashboard", design: "Develop an admin dashboard layout with sidebar navigation.", status: "Completed", bgColor: "from-sky-400 to-blue-500" },
    { name: "Rizwan", topic: "Mobile UI", design: "Design mobile-first responsive pages for profile and settings.", status: "In Review", bgColor: "from-yellow-400 to-amber-500" },
    { name: "Sara", topic: "Logo Design", design: "Create branding logo and matching icon set for the app.", status: "Active", bgColor: "from-purple-400 to-violet-500" },
    { name: "Zaid", topic: "Color Theme", design: "Build and apply a custom color theme using Tailwind CSS.", status: "Failed", bgColor: "from-indigo-400 to-purple-600" },
    { name: "Mehak", topic: "Project Setup", design: "Set up React project with folder structure and routing.", status: "Completed", bgColor: "from-orange-400 to-red-500" },
    { name: "Ibrahim", topic: "Animation", design: "Add smooth hover and scroll animations using Framer Motion.", status: "Pending", bgColor: "from-lime-400 to-green-600" },
  ];

  // Dynamic status color pills
  const statusColors = {
    Active: "bg-green-500/20 text-green-600 border border-green-400/50",
    Pending: "bg-yellow-500/20 text-yellow-600 border border-yellow-400/50",
    Completed: "bg-violet-500/20 text-violet-600 border border-violet-400/50",
    "In Review": "bg-blue-500/20 text-blue-600 border border-blue-400/50",
    Failed: "bg-red-500/20 text-red-600 border border-red-400/50",
  };

  return (
    <div id="task" className="w-full py-6">
      {/* Header row */}
      <div className="grid grid-cols-4 bg-zinc-900 text-gray-200 font-semibold py-3 px-5 rounded-xl shadow-md sticky top-0 z-10">
        <div>Name</div>
        <div>Topic</div>
        <div>Design</div>
        <div>Status</div>
      </div>

      {/* Scrollable list */}
      <div className="h-[300px] overflow-y-auto mt-4 pr-2 custom-scrollbar space-y-4">
        {taskData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center gap-4 rounded-2xl p-5 bg-gradient-to-r shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 from-zinc-800 to-zinc-900 border border-zinc-700/40"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md bg-gradient-to-br ${item.bgColor}`}
              >
                {item.name.charAt(0)}
              </div>
              <span className="font-semibold text-gray-100">{item.name}</span>
            </div>

            {/* Topic */}
            <div className="text-gray-300 font-medium">{item.topic}</div>

            {/* Design */}
            <div className="text-sm text-gray-400 max-w-md">{item.design}</div>

            {/* Status pill */}
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold text-center w-fit ${statusColors[item.status]}`}
            >
              {item.status}
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #6b7280;
            border-radius: 20px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #a78bfa;
          }
        `}
      </style>
    </div>
  );
};

export default Alltask;
