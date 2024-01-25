import { useState } from "react";
import "./Todo.css";
import CheckedIcon from "./icons/CheckedIcon";
import DeleteIcon from "./icons/DeleteIcon";
import UnCheckedIcon from "./icons/UnCheckedIcon";
import EditIcon from "./icons/EditIcon";
import { useEffect } from "react";
import { useRef } from "react";

const Todo = ({ todo, todoActions }) => {
  const { id, title, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const titleRef = useRef();

  function handleEdit() {
    const newTitle = titleRef.current.innerHTML;
    todoActions.editTodo({ id: id, title: newTitle });
    setIsEditing(false);
  }

  return (
    <div className="todo" id={id}>
      {/* Completed tasks should not be edited */}
      <span
        className="todo__title"
        contentEditable={isEditing && !completed}
        ref={titleRef}
        suppressContentEditableWarning={isEditing && !completed}
        style={{ textDecoration: completed ? "line-through": "none"}}
      >
        {title}
      </span>
      <div className="todo__actions">
        {isEditing ? (
          <button className="todo__actions-edit-todo" onClick={handleEdit}>
            SAVE{" "}
          </button>
        ) : (
          <button
            className="todo__actions-edit-todo"
            onClick={() => setIsEditing(true)}
          >
            <EditIcon width={20} height={20} color="black" />
          </button>
        )}

        <button
          className="todo__actions-completion-status"
          onClick={() => todoActions.changeCompletionStatus(id)}
          disabled={isEditing}
          style={isEditing ? { opacity: 0.1, cursor: "not-allowed" } : {}}
        >
          {completed ? (
            <CheckedIcon width={20} height={20} color="green" />
          ) : (
            <UnCheckedIcon width={20} height={20} color="green" />
          )}
        </button>

        <button
          className="todo__actions-remove-todo"
          onClick={() => todoActions.removeTodo(id)}
          disabled={isEditing}
          style={isEditing ? { opacity: 0.1, cursor: "not-allowed" } : {}}
        >
          <DeleteIcon width={20} height={20} color="red" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
