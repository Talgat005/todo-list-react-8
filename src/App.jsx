import { useState } from "react";
import TodoForm from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([{ id: 1, text: "Learn React" }]);
  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  }

  function handleDelete(todoId) {
    setTodos(todos.filter((item) => item.id !== todoId));
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={handleAddTodo} />

      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
