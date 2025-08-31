import React, { useState, useEffect } from "react";
import { LogOut, User } from "lucide-react"; // icons

const Header = ({ data }) => {
  const [username, setUsername] = useState("");

  // Update username when `data` changes
  useEffect(() => {
    if (!data) {
      setUsername("Admin");
    } else {
      setUsername(data.name);
    }
  }, [data]);

  const Logoutuser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <header className="p-6 bg-zinc-900/80 backdrop-blur-xl shadow-lg rounded-2xl border border-zinc-800 flex items-center justify-between">
      {/* Left: Greeting + Avatar */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold text-lg shadow-md">
          {username ? username.charAt(0).toUpperCase() : <User size={20} />}
        </div>

        {/* Greeting */}
        <div>
          <h1 className="text-xl font-semibold text-gray-200">
            Hello 👋,
          </h1>
          <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
            {username}
          </p>
        </div>
      </div>

      {/* Right: Logout Button */}
      <button
        onClick={Logoutuser}
        className="flex items-center gap-2 px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 shadow-md hover:scale-105 hover:shadow-violet-500/40 transition-transform duration-300"
      >
        <LogOut size={18} />
        Log Out
      </button>
    </header>
  );
};

export default Header;
