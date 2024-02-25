import React, { useEffect, useState } from "react";
import { TodoContextProvider } from "../contexts/TodoContext";
import { v4 as uuidv4 } from "uuid";

function CardForm() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTdodoItem] = useState("");

  let addTodo = () => {
    e.preventDefault();
    setTodos((prev) => {
      [
        ...prev,
        {
          id: uuidv4(),
          todo: todoItem,
          completed: false,
        },
      ];
    });
    setTdodoItem("");
  };

  let updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevItem) => prevItem.id == id && todo));
  };

  let deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) => todo.id === id && { todo, completed: true })
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("effects", todos);
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex bg-green-300 ">
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Enter the todo itme here"
            onChange={(e) => setTdodoItem(e.target.value)}
            value={todoItem}
          ></input>
          <button type="submit">Click me</button>
        </form>
      </div>
    </TodoContextProvider>
  );
}

export default CardForm;
