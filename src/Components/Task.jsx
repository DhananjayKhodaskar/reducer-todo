import React from "react";
import { TODO_ACTIONS } from "./Todo";

const Task = ({ task, dispatch }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <h3
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "8px",
          cursor: "pointer",
        }}
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.TOGGLE_TODO, payload: task.id })
        }
      >
        {task.task}
      </h3>
      <button
        style={{
          padding: "4px 8px",
          background: "#ff5050",
          border: "none",
          borderRadius: "4px",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() =>
          dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: task.id })
        }
      >
        X
      </button>
    </div>
  );
};

export default Task;
