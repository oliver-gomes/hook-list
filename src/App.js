import React, { useState } from "react";

import "./App.css";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

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

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodo(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].onCompleted = true;

    setTodo(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodo(newTodos);
  };
  return (
    <div className="main-box">
      <h1>React Hook To Do Lost</h1>
      <TodoInput addTodo={addTodo} className="input-box" />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        ></Todo>
      ))}
    </div>
  );
}

export default App;
