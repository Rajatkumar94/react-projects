import React from "react";
import useTodoContext from "../contexts/TodoContext";

function TodoItem() {
  const { todos } = useTodoContext();

  return (
    <div>
      <p>Welcome to TodoItem component</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li> 
        ))}
      </ul>
    </div>
  );
}

export default TodoItem;
