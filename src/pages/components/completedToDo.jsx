import React from "react";

const CompletedToDo = ({ completedData }) => {
  return (
    <div>
      <div className="completed-tasks m-5 md:ml-10 md:mr-10">
        <h2 className="text-xl">Completed Tasks</h2>
        <ul>
          {completedData.map((todo, index) => (
            <>
              <div
                className="flex justify-between text-gray-500 mt-3 font-[Outfit] text-lg font-normal"
              >
                <div className="flex gap-4">
                <i class="ri-checkbox-fill"></i>
                  <li key={index} className="line-through">
                    {todo}
                  </li>
                </div>
                <i className="ri-star-fill line-none"></i>
              </div>
              <hr className="border-[#35793729]" />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompletedToDo;
