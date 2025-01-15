import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = ({ addUserData }) => {
  // initial user data value
  let initialData = {
    userName: "",
    password: "",
  };

  // user data state
  let [userData, setUserData] = useState(initialData);

  // function for handling input fields and storing them
  function handleChange(e) {
    setUserData({
      [e.target.name]: e.target.value,
    });
  }

  // function for submiting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    addUserData(userData);
    setUserData(initialData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center font-[Geist]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6 font-[PlayFair] underline">
          Login
        </h2>

        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-1 focus:ring-red-300"
              placeholder="Enter User Name"
              onChange={handleChange}
              value={userData.userName}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-1 focus:ring-red-300"
              placeholder="Enter your password"
              value={userData.password}
            />

            <div className="mt-4">
              <label
                htmlFor="confirmation"
                className="text-sm flex gap-5"
                id="confirmation"
              >
                <input type="checkbox" id="confirmation" name="confirmation" />
                <p>
                  By Clicking on it you agree to our,{" "}
                  <span className="text-blue-500">Terms and Conditions.</span>
                </p>
              </label>
            </div>
          </div>

          {/* Submit Button */}

          <button
            className="w-full text-white py-2 px-4 bg-red-500 rounded-md hover:bg-red-700"
            onClick={handleSubmit} 
          >
            <Link to={"/"}>Log In</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
