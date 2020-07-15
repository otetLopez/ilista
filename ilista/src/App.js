import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./Note.js";
import AddNotePage from './PageAddNote.js';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [title_in, setTitle] = React.useState("");
  const [content_in, setContent] = React.useState("");

  // handle Submit doesn't work when there is one or more input
  const handleSubmit = e => {
    console.log("Note Submitted");
    e.preventDefault();
    if (!title_in) return;
    addTodo(title_in, content_in);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="New Note"
        id="title_in"
        value={title_in}
        onChange={e => setTitle(e.target.value)}
      />
       <input
        type="text"
        className="input"
        placeholder="New Note Content"
        id="content_in"
        value={content_in}
        onChange={e => setContent(e.target.value)}
      />
    </form>
  );
}

function NoteDetail() {
    console.log("NoteDetail")
    var title = document.getElementById('title_in').value;
    var content = document.getElementById('content_in').value;
    console.log(title);
    console.log(content);
    const where = document.getElementById("root");
    ReactDOM.render(<AddNotePage/>, where);
}

function App() {
  const [todos, setTodos] = useState([
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            content={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <div>
        <button onClick={NoteDetail}> Add New Note</button>
      </div>
    </div>
  );
}
export default App;

