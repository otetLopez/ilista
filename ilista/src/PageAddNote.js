import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import "./App.css";


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

function SubmitNote() {
    console.log("Completing Note")
    var title = document.getElementById('title_in').value;
    var content = document.getElementById('content_in').value;
    console.log(title);
    console.log(content);
    const where = document.getElementById("root");
    ReactDOM.render(<App/>, where);
}

function AddNotePage() {
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
            <h1>ILISTA</h1>
            <p><i>A companion.  A simple note application</i></p>
            <br/><br/><br/><br/><br/>
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
            <br/><br/><br/><br/><br/>
            <div>
            <button onClick={SubmitNote}> Done</button>
            <button onClick={SubmitNote}> Cancel</button>
            </div>
      </div>
    );
}

export default AddNotePage;
