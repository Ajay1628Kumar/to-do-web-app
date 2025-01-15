import React from "react";
import AddToDoComp from "../components/addToDo";
import DisplayToDo from "../components/displayToDo";
import CompletedToDo from "../components/completedToDo";

const Home = ({
  addData,
  data,
  markAsCompleted,
  completedData,
  completedDataId,
}) => {
  return (
    <div>
      {/* Add ToDo's Component */}
      <AddToDoComp addData={addData} />

      {/* Display ToDo Component */}
      {data.map((data) => {
        return (
          <DisplayToDo data={data} key={data.id} onComplete={markAsCompleted} />
        );
      })}

      {/* Completed To Do Component */}
      <CompletedToDo completedData={completedData} />
    </div>
  );
};

export default Home;
