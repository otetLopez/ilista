import React from "react";
import ReactDOM from "react-dom";
import App from '../App.js';
import "../App.css";
import { Note } from "./note.js";
import { PushNote, GetNoteID, INFO_LOG } from "../App.js";


function TodoForm() {
    const [title_in, setTitle] = React.useState("");
    const [content_in, setContent] = React.useState("");

    // handle Submit doesn't work when there is one or more input
    const handleSubmit = e => {
        console.log(INFO_LOG + "Enter button is pressed.  But not handling it");
        e.preventDefault();
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

//CURRENTLY ASSIGNING INDEX TO DEFAULT 1 when creating var newNote = new Note(...)
function AddNotePage() {
    var note_id = GetNoteID();
    console.log("Note ID is now: " + note_id);
    const where = document.getElementById("root");
    return (
        <div className="app">
            <h1>ILISTA</h1>
            <p><i>A companion.  A simple note application</i></p>
            <br/><br/>
            <div className="todo-list">
            <TodoForm/>
            </div>
            <br/><br/><br/><br/><br/>
            <div>
            <button onClick={()=> {
                        var title = document.getElementById('title_in').value
                        var content = document.getElementById('content_in').value;
                        var newNote = new Note(note_id, title, content);
                        PushNote(newNote);
                        ReactDOM.render(<App/>, where);
            }}> Done</button>
            <button onClick={() => {
                        ReactDOM.render(<App/>, where);
                        }}> Cancel</button>
            </div>
      </div>
    );
}

export default AddNotePage;
