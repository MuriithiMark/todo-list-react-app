import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const onTodoAdded = (todo) => {
    // Get Id of last todo pushed and add 1 to get id of the next todo
    if (todos.length > 0) {
      todo.id = todos[todos.length - 1].id + 1;
    } else {
      todo.id = 1;
    }

    todo.completed = false;
    setTodos([...todos, todo]);
  };

  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const changeCompletionStatus = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1 className="site-title">Todo App</h1>
      <AddTodo onTodoAdded={onTodoAdded} />
      <TodoList todos={todos} todoActions={{removeTodo, changeCompletionStatus}} />
    </div>
  );
};

export default App;
