import { Header } from "./Components/Header";
import { Tabs } from "./Components/Tabs";
import { ToDoInput } from "./Components/ToDoInput";
import { ToDoList } from "./Components/ToDoList";
import "./index.css";
import "./fanta.css";
import { useState, useEffect } from "react";

function App() {
  //   const todos = [
  //     { input: 'Hello! Add your first todo!', complete: true },
  //    { input: 'Get the groceries!', complete: false },
  //     { input: 'Learn how to web design', complete: false },
  //    { input: 'Say hi to gran gran', complete: true },
  //  ]

  const [todos, setTodos] = useState([
    { input: "Get the groceries!", complete: false },
  ]);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveTodo(newTodoList);
  }

  function handleEditTodo(index) {
    let newTodo = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodo[index] = completedTodo;
    setTodos(newTodo);
    handleSaveTodo(newTodo);
  }

  function handleDeleteTodo(index) {
    const newTodo = todos.filter((val, valIndex) => {
      return valIndex !== index;
      handleSaveTodo(newTodo);
    });

    setTodos(newTodo);
  }

  function handleSaveTodo(currTodo) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodo }));
  }

  const [selectedTabs, setSelectedTabs] = useState("All");

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }

    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <div>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTabs={selectedTabs}
        setSelectedTabs={setSelectedTabs}
      />
      <ToDoList
        selectedTabs={selectedTabs}
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <ToDoInput handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
