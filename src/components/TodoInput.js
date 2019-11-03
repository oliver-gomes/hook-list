import React, { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);

    setValue("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Todo"
          className="input effect-1"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span class="focus-border"></span>
      </div>
    </form>
  );
}
