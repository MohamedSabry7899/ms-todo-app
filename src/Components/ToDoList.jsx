import { ToDoCard } from "./ToDoCard";

export function ToDoList({
  todos,
  selectedTabs,
  handleDeleteTodo,
  handleEditTodo,
}) {
  const filterTodoList =
    selectedTabs === "All"
      ? todos
      : selectedTabs === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <ToDoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          />
        );
      })}
    </>
  );
}
