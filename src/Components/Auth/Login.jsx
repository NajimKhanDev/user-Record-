import React, { useState } from 'react';

const Login = ({handlelogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');

  // ✅ Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    handlelogin(email,password)

    // ✅ Log submitted values
    console.log("Submitted Email:", email);
    console.log("Submitted Password:", password);

    // ✅ Clear input fields after submission
    setEmail('');
    setPassword('');

    // You should see this in the browser console (press F12 or Ctrl+Shift+I)
    console.log("Form submitted successfully!");
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
      <div className="w-full max-w-md bg-white border border-violet-600 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-violet-700">Login</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your Email"
            required
            className="bg-white placeholder:text-gray-600 border border-gray-300 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter your Password"
            required
            className="bg-white placeholder:text-gray-600 border border-gray-300 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            type="submit"
            className="bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
