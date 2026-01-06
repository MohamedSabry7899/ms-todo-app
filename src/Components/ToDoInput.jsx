import { useState } from "react";

export function ToDoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task"
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
