import React from "react";

const DisplayToDo = ({ data, onComplete, deleteData }) => {
  // Delete To-Do
  function handleDelete() {
    deleteData(data.id);
  }

  // Mark the to-do item as completed
  function handleComplete() {
    onComplete(data.id); // Ensure only ID is passed
  }

  return (
    <div className="ml-5 mr-5 md:ml-10 md:mr-10 pt-3 pb-3 border-b-2 border-[#35793729]">
      <li className="list-none flex justify-between items-center cursor-pointer">
        <div className="flex gap-5 justify-center items-center md:text-xl">
          <input
            type="checkbox"
            name="toDoCheckBox"
            id={`toDoCheckBox-${data.id}`}
            onChange={handleComplete} 
          />
          <p className="text-[#1B281B]" onClick={handleComplete}>{data.toDoName}</p>
        </div>

        <i
          className="ri-delete-bin-line hover:text-red-400 text-xl cursor-pointer"
          onClick={handleDelete}
        ></i>
      </li>
    </div>
  );
};

export default DisplayToDo;
