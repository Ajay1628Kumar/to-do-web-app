import { useState } from "react";
import "./App.css";
import Navbar from "./pages/components/navBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import LogIn from "./pages/LogIn/logIn";

function App() {
  let [data, setData] = useState([]); // Active to-do items
  let [completedData, setCompletedData] = useState([]); // Completed to-do items
  let [userD, setUserD] = useState({});

  function addData(newData) {
    setData([
      ...data,
      {
        ...newData,
        id: data.length + 1,
      },
    ]);
  }

  // Move to-do item to the completed list
  function markAsCompleted(toDoName) {
    // Add the completed to-do to completedData
    setCompletedData((prev) => [...prev, toDoName]);

    // Remove the completed to-do from active data
    setData(data.filter((db) => db.toDoName !== toDoName));
  }

  function addUserData(userData) {
    setUserD({
      ...userData,
      id: userD.length + 1,
    });
  }

  return (
    <>
      <div className="/* bg-[#FBFDFC] */">
        {/* Navbar */}
        <Navbar userD={userD} />

        {/* creating routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <Home
                addData={addData}
                data={data}
                markAsCompleted={markAsCompleted} // Pass markAsCompleted to Home
                completedData={completedData}
              />
            }
          />

          {/* Sign In Route */}
          <Route
            path="/src/pages/LogIn"
            element={<LogIn addUserData={addUserData} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
