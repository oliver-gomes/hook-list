import React from "react";

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo btn"
      style={{ textDecoration: todo.onCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
