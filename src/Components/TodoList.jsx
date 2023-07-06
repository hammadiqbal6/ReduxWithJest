import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => {
    switch (state.visibilityFilter) {
      case "all":
        return state.todo;
      case "active":
        return state.todo.filter((todo) => !todo.completed);
      case "completed":
        return state.todo.filter((todo) => todo.completed);
      default:
        return Error("abc");
    }
  });
  return (
    <>
      <div
        className="flex flex-col gap-y-4 mt-3"
        data-testid="todoList-element"
      >
        {todoList.map((note) => (
          <TodoItem note={note} key={note.id}></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoList;
