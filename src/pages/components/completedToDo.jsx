import React from "react";

const CompletedToDo = ({ completedData }) => {
  return (
    <div>
      <div className="completed-tasks m-5 md:ml-10 md:mr-10">
        <h2 className="text-xl">Completed Tasks</h2>
        <ul>
          {completedData.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between text-gray-500 mt-3 font-[Outfit] text-lg font-normal"
            >
              <div className="flex gap-4">
                <i className="ri-checkbox-fill"></i>
                <li className="line-through list-none">{todo.toDoName}</li>
              </div>
              <i className="ri-star-fill"></i>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompletedToDo;
