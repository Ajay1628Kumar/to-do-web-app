import React, { useState } from "react";

const initialData = {
  toDoName: "",
};

const AddToDoComp = ({ addData }) => {
  let [newData, setNewData] = useState(initialData);

  function handleChange(e) {
    setNewData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newData.toDoName.trim()) {
      window.alert("Please enter a valid task");
      return;
    }
    addData(newData);
    setNewData(initialData); // Reset input after adding
  }

  return (
    <div className="mt-0 m-5 md:ml-10 md:mr-10 p-4 rounded-md bg-gradient-to-t from-[#3579371A] to-[#D0FFD21A]">
      <div className="pb-0">
        <h1 className="text-base font-[OutFit] font-medium text-[#142E159E]">
          To Do <i className="ri-arrow-down-s-fill"></i>
        </h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add A Task"
            className="text-center font-[OutFit] font-normal w-full h-44 placeholder:text-center placeholder:text-[##1B281BB8] placeholder:font-[OutFit] placeholder:font-normal bg-transparent"
            name="toDoName"
            onChange={handleChange}
            value={newData.toDoName}
          />

          <div className="flex justify-between items-center mt-3">
            <div>
              <ul className="text-sm flex gap-3">
                <li>
                  <i className="ri-notification-line"></i>
                </li>
                <li>
                  <i className="ri-repeat-line"></i>
                </li>
                <li>
                  <i className="ri-calendar-line"></i>
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="text-base font-[Outfit] font-medium p-2 pt-1 pb-1 rounded-lg text-[#2D6930] bg-[#35793729]"
            >
              Add A Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToDoComp;
