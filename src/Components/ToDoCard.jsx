export function ToDoCard({
  todo,
  handleDeleteTodo,
  todoIndex,
  handleEditTodo,
}) {
  const todoItem = todo;
  return (
    <div className="card todo-item">
      <p>{todoItem.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleEditTodo(todoIndex);
          }}
          disabled={todoItem.complete}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
