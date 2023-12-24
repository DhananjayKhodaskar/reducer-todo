import React, { useReducer, useState } from "react";
import Task from "./Task";

export const TODO_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case TODO_ACTIONS.TOGGLE_TODO:
      const id = action.payload;
      return state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    case TODO_ACTIONS.DELETE_TODO:
      const toDeleteTaskId = action.payload;
      return state.filter((task) => task.id !== toDeleteTaskId);
    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), task: task, completed: false };
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: newTask });
    setTask("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <form
        style={{ marginBottom: "20px" }}
        action=""
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            marginRight: "8px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            background: "#4caf50",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </form>

      {state.map((task) => (
        <Task key={task.id} dispatch={dispatch} task={task} />
      ))}
    </div>
  );
};

export default Todo;
