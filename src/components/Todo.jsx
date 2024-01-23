import "./Todo.css";
import CheckedIcon from "./icons/CheckedIcon";
import DeleteIcon from "./icons/DeleteIcon";
import UnCheckedIcon from "./icons/UnCheckedIcon";

const Todo = ({ todo, todoActions }) => {
  console.log(todoActions);
  const { id, title, completed } = todo;
  return (
    <div className="todo" id={id}>
      <span className="todo__title">{title}</span>
      <div className="todo__actions">
        <button
          className="todo__actions-completion-status"
          onClick={() => todoActions.changeCompletionStatus(id)}
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
        >
          <DeleteIcon width={20} height={20} color="red" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
