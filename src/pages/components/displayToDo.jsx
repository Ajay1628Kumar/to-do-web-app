import React, { useState } from "react";

const DisplayToDo = ({ data, onComplete }) => {
  const [starColor, setStarColor] = useState(false);

  // Toggle star icon
  function setStar() {
    setStarColor(!starColor);
  }

  // Mark the to-do item as completed
  function handleClick() {
    onComplete(data.toDoName, data.id); // Call onComplete (markAsCompleted)
  }

  return (
    <div className="ml-5 mr-5 md:ml-10 md:mr-10 pt-3 pb-3 border-b-2 border-[#35793729]">
      <li
        className="list-none flex justify-between items-center cursor-pointer"
        onClick={handleClick} // Mark as completed on click
      >
        <div className="flex gap-5 justify-center items-center md:text-xl">
          <label htmlFor="toDoCheckBox"></label>
          <input type="checkbox" name="toDoCheckBox" id="toDoCheckBox" />
          <p className={`text-[#1B281B] ${starColor ? "line-through" : ""}`}>
            {data.toDoName}
          </p>
        </div>

        <p>
          {starColor ? (
            <i onClick={setStar} className="ri-star-fill"></i>
          ) : (
            <i onClick={setStar} className="ri-star-line"></i>
          )}
        </p>
      </li>
    </div>
  );
};

export default DisplayToDo;
