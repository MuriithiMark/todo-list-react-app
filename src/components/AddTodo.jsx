import { useState } from "react";
import './AddTodo.css';

const AddTodo = ({ onTodoAdded }) => {
  const [todoTitle, setTodoTitle] = useState("");

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
        onClick={() => onTodoAdded({ title: todoTitle })}
      >
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
