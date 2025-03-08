import React from "react";
import AddToDoComp from "../components/addToDo";
import DisplayToDo from "../components/displayToDo";
import CompletedToDo from "../components/completedToDo";

const Home = ({
  addData,
  data,
  markAsCompleted,
  completedData,
  deleteData,
}) => {
  return (
    <div>
      {/* Add ToDo's Component */}
      <AddToDoComp addData={addData} />

      {/* Display ToDo Component */}
      {data.map((todo) => (
        <DisplayToDo
          key={todo.id}
          data={todo}
          onComplete={markAsCompleted}
          deleteData={deleteData}
        />
      ))}

      {/* Completed To Do Component */}
      <CompletedToDo completedData={completedData} />
    </div>
  );
};

export default Home;
