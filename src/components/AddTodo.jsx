import { useState } from "react";
import './AddTodo.css';

const AddTodo = ({ onTodoAdded }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleClick = () => {
    onTodoAdded({ title: todoTitle});
    setTodoTitle("");
  }

  return (
    <div className="add-todo-form">
      <input
        type="text"
        className="add-todo__input"
        value={todoTitle}
        onChange={(ev) => setTodoTitle(ev.target.value)}
      />
      <button
        className="add-todo-form__button"
        onClick={handleClick}
      >
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
