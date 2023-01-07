import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      addTask(userInput);
    } else {
      alert("Isi Inputan Anda Sebelum Submit");
    }
    setUserInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Add todo..."
        className="todo-input"
      />
      <button className="todo-button">Submit</button>
    </form>
  );
};

export default ToDoForm;
