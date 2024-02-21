import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodoContext() {
  return useContext(TodoContext);
}
