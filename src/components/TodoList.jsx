import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, todoActions }) => {
  console.log(todos);
  if (todos.length < 1) {
    return (
        <span style={{paddingTop:'50px'}}>No Todos. Add Them!</span>
    );
  }
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} todoActions={todoActions} />
      ))}
      {/* <Todo todo={todos[0]} todoActions={todoActions} /> */}
      {/* { todos.map((todo) => <Todo key={todo.id} todo={todo} todoActions={todoActions} /> )} */}
    </div>
  );
};

export default TodoList;
