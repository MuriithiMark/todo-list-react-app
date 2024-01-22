import "./Todo.css";

const Todo = ({ todo, todoActions }) => {
  console.log(todoActions);
  const { id, title, completed } = todo;
  return (
    <div className="todo" id={id}>
      <span className="todo__title">{title}</span>
      <div className="todo__actions">
      <input
        type="checkbox"
        name="todo-completion-checkbox"
        value={completed}
        className="todo__actions-completion-checkbox"
        onClick={() => todoActions.changeCompletionStatus(id)}
      />
      <button
        className="todo__actions-remove-todo"
        onClick={() => todoActions.removeTodo(id)}
      >
        DELETE
      </button>
      </div>
    </div>
  );
};

export default Todo;
