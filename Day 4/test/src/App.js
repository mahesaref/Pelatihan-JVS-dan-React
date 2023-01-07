import React, { useState } from "react";
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = (id) => {
    let filtered = toDoList.filter((task) => {
      return task.id !== parseInt(id);
    });
    setToDoList(filtered);
    console.log(id);
    console.log(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div className="todo-app">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleDelete={handleFilter}
      />
    </div>
  );
}

export default App;
