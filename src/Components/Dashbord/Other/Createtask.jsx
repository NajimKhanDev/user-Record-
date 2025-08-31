import React, { useState } from "react";

// Reusable input field component
const InputField = ({ label, type = "text", placeholder, value, onChange, name }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-gray-200 font-semibold">{label}</label>
    <input
      className="w-full px-4 py-3 rounded-xl bg-zinc-900/70 border border-zinc-700 text-gray-100 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  </div>
);

const Createtask = () => {
  const [formData, setFormData] = useState({
    username: "",
    date: "",
    category: "",
    description: "",
    title: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      tasktitle: formData.title,
      taskdescription: formData.description,
      taskdate: formData.date,
      category: formData.category,
      active: false,
      newTask: true,
      completed: false,
    };

    const data = JSON.parse(localStorage.getItem("Employee")) || [];
    const userExists = data.some((elem) => elem.name === formData.username);

    if (!userExists) {
      setMessage("❌ User not found!");
      return;
    }

    const updatedData = data.map((elem) => {
      if (elem.name === formData.username) {
        elem.tasks.push(newTask);
      }
      return elem; // return each element back
    });

    localStorage.setItem("Employee", JSON.stringify(updatedData));

    setMessage(`✅ Task assigned to "${formData.username}" successfully!`);

    setFormData({
      username: "",
      date: "",
      category: "",
      description: "",
      title: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-6">
      <div className="w-full max-w-5xl p-8 rounded-3xl shadow-2xl bg-zinc-950/70 backdrop-blur-xl border border-zinc-800">
        
        {/* Success / Error Message */}
        {message && (
          <div className="text-center text-white font-medium mb-6 py-3 px-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 animate-pulse">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-10">
          
          {/* Left Inputs */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <InputField
              label="Title"
              placeholder="Make UI design"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <InputField
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <InputField
              label="Assign To"
              placeholder="Assign to someone"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <InputField
              label="Category"
              placeholder="Design, Dev, etc."
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          {/* Right Side: Textarea + Button */}
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <label className="text-sm text-gray-200 font-semibold">Description</label>
            <textarea
              className="w-full min-h-[220px] resize-none px-4 py-3 rounded-xl bg-zinc-900/70 border border-zinc-700 text-gray-100 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
              placeholder="Describe the task here..."
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            
            <button
              type="submit"
              className="w-full py-4 mt-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-violet-500/40"
            >
              🚀 Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createtask;
