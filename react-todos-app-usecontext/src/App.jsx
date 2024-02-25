import { useEffect, useState } from "react";
import "./App.css";
import CardForm from "./components/CardForm";
import TodoItem from "./components/TodoItem";
import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  // const [todos, setTodos] = useState([]);

  // function addTodo(todo) {
  //   setTodos([...todos, { id: 1, ...todo }]);
  // }

  // function updateTodo(id, todo) {
  //   const updateTodo = todos.map((todo) => todo.id === id);
  //   console.log(updateTodo);
  //   setTodos([...todos, updateTodo && todo]);
  // }

  // function deleteTodo(id) {
  //   const deleteTodo = todos.filter((todo) => todo.id !== id && true);
  //   setTodos(deleteTodo);
  // }

  // function toggleComplete(id) {
  //   setTodos((prev) =>
  //     prev.map((prevTodoItem) =>
  //       prevTodoItem.id === id
  //         ? { ...prevTodoItem, completed: !prevTodoItem.completed }
  //         : prevTodoItem
  //     )
  //   );
  // }

  // useEffect(() => {
  //   const todo = JSON.parse(localStorage.getItem("todos"));

  //   if (todos && todos.length > 0) {
  //     setTodos(todos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
      <CardForm />
      <TodoItem />
    </>
  );
}

export default App;
