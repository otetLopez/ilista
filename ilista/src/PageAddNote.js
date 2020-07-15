import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from './App.js';
import "./App.css";


function TodoForm({ addTodo }) {
    const [title_in, setTitle] = React.useState("");
    const [content_in, setContent] = React.useState("");

    // handle Submit doesn't work when there is one or more input
    const handleSubmit = e => {
        console.log("Enter button is pressed.  But not handling it");
        e.preventDefault();
        // if (!title_in) return;
        // addTodo(title_in, content_in);
        // setTitle("");
    };
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="title_in"
            placeholder="New Note"
            id="title_in"
            value={title_in}
            onChange={e => setTitle(e.target.value)}
        />
        <br/><br/>
        <textarea 
            name="content_in" 
            id="content_in"
            placeholder="Enter you note details here..."
            value={content_in}
            rows="15"
            cols="50"
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
}

function AddNotePage() {
    const [todos, setTodos] = useState([
    ]);
    
    const addTodo = text => {
        console.log("I am in addTodo")
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1>ILISTA</h1>
            <p><i>A companion.  A simple note application</i></p>
            <br/><br/>
            <div className="todo-list">
            <TodoForm addTodo={addTodo} />
            </div>
            <br/><br/><br/><br/><br/>
            <div>
            <button onClick={()=> {
                        console.log("Pressed Done")
                        var title = document.getElementById('title_in').value
                        var content = document.getElementById('content_in').value;
                        console.log(title)
                        addTodo(title)
                        const where = document.getElementById("root");
                        ReactDOM.render(<App note="NewNote"/>, where);
            }}> Done</button>
            <button onClick={SubmitNote}> Cancel</button>
            </div>
      </div>
    );
}

export default AddNotePage;
