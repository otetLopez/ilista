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

function NoteDetail() {
    console.log("NoteDetail")
    const where = document.getElementById("root");
    ReactDOM.render(<AddNotePage/>, where);
}

function App(newNote) {

  if(newNote) {
    console.log(newNote.note);
  }
  const [todos, setTodos] = useState([
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return ( 
    <div className="app">
      <h1>ILISTA</h1>
      <p><i>A companion.  A simple note application</i></p>
      <br/><br/><br/><br/><br/>
      <div className="todo-list">
        <p>Note list to be displayed here...</p>
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
      </div>
      <br/><br/><br/><br/><br/>
      <div>
        <button onClick={NoteDetail}> Add New Note</button>
      </div>
    </div>
  );
}
export default App;

