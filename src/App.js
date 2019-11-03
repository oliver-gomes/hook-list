import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodo] = useState([
    {
      text: "Learn React Hook",
      onCompleted: false
    },
    {
      text: "Learn Spanish",
      onCompleted: false
    }
  ]);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo}></Todo>
      ))}
    </div>
  );
}

export default App;
