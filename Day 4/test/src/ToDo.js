import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const ToDo = ({ todo, handleToggle, handleDelete }) => {
  const handleClick = (e) => {
    handleToggle(e.currentTarget.id);
  };

  const handleClickDelete = (e) => {
    handleDelete(e.currentTarget.id);
  };

  console.log(todo);

  return (
    <>
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={todo.id + todo.task}
      >
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.completed}
          onChange={handleClick}
        ></input>
        <div
          name="todo"
          value={todo.id}
          className={todo.completed ? "todo strike" : "todo"}
        >
          {todo.task}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            className="delet-icon"
            id={todo.id}
            onClick={handleClickDelete}
          />
        </div>
        {/* <button id={todo.id} onClick={handleClickDelete}>
          Delete
        </button> */}
      </div>
    </>
  );
};

export default ToDo;
