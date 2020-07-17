import React from "react";
import ReactDOM from "react-dom";
import App from '../App.js';
import "../App.css";
import { Note } from "./note.js";
import { GetNotesList } from "../App.js";


function EditTodoForm({note}) {
    
    console.log("dene"+ note.id + " " + note.content);
  
    const [title_in, setTitle] = React.useState(note.title);
    const [content_in, setContent] = React.useState(note.content);

    // handle Submit doesn't work when there is one or more input
    const handleSubmit = e => {
       // console.log(INFO_LOG + "Enter button is pressed.  But not handling it");
        e.preventDefault();
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="title_in"
            id="title_in"
            value={title_in}
            onChange={e => setTitle(e.target.value)}
        />
        <br/><br/>
        <textarea 
            name="content_in" 
            id="content_in"
            value={content_in}
            rows="15"
            cols="50"
            onChange={e => setContent(e.target.value)}
        />
        </form>
    );
}

//CURRENTLY ASSIGNING INDEX TO DEFAULT 1 when creating var newNote = new Note(...)
function EditNotePage({noteId}) {
    var allTodos = GetNotesList();
    var note ;
    
    for(var i = 0 ; i<allTodos.length ;i++){
        if(allTodos[i].id === noteId){
            note = allTodos[i];
        }
    }
 

    const where = document.getElementById("root");
    return (
        <div className="app">
            <h1>ILISTA</h1>
            <p><i>A companion.  A simple note application</i></p>
            <br/><br/>
            <div className="todo-list">
            <EditTodoForm note={note}/>
            </div>
            <br/><br/><br/><br/><br/>
            <div>
            <button onClick={()=> {
                        var title = document.getElementById('title_in').value
                        var content = document.getElementById('content_in').value;
                        note.title = title;
                        note.content = content;
                        ReactDOM.render(<App/>, where);
            }}> Update</button>
            <button onClick={() => {
                        ReactDOM.render(<App/>, where);
                        }}> Cancel</button>
            </div>
      </div>
    );
}

export default EditNotePage;
