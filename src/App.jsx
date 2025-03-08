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
        id: data.length+1, // Ensure unique ID
      },
    ]);
  }

  // Delete to-do
  function deleteData(id) {
    setData(data.filter((item) => item.id !== id));
  }

  // Move to-do item to the completed list
  function markAsCompleted(id) {
    const completedItem = data.find((item) => item.id === id);
    if (!completedItem) return;

    setCompletedData((prev) => [...prev, completedItem]); // Add to completed list
    setData(data.filter((item) => item.id !== id)); // Remove from active list
  }

  function addUserData(userData) {
    setUserD({
      ...userData,
      id: Date.now(), // Ensure unique ID
    });
  }

  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar userD={userD} />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addData={addData}
                data={data}
                markAsCompleted={markAsCompleted}
                completedData={completedData}
                deleteData={deleteData}
              />
            }
          />

          <Route path="/LogIn" element={<LogIn addUserData={addUserData} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
