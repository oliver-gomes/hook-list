import React, { useState } from "react";
import logo from "./logo.svg";
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

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
        ></Todo>
      ))}
    </div>
  );
}

export default App;
