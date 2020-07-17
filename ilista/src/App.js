import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Note } from "./scripts/note.js";
import AddNotePage from './scripts/addNote.js';

export const INFO_LOG = "INFO_DEBUG: ";
var notesList = [];
var nId = 0;

/**
 * PushNote(newNote)
 * This exported function allows other modules to push newNote object into global variable noteList Array
 * @param {Note} newNote 
 */
export function PushNote(newNote) {
  notesList.push(newNote);
  nId = nId + 1;
}

/**
 * GetNoteId() 
 * This function is a stupid way to do indexing and generating note ids
 * This should be fixed!
 */
export function GetNoteID() {
  return nId;
}

/**
 * Name: CreateNewNote() 
 * This function routes user to add new note view.  Called when "Add New Note" button is called.
 * The note_index is just incremented when there is a note being pushed
 */
function CreateNewNote() {
    console.log(INFO_LOG + "CreateNewNote")
    const where = document.getElementById("root");
    ReactDOM.render(<AddNotePage/>, where);
}

/**
 * Name: DisplayList()
 * HERE COMES THE DRAGON!
 * This function displays the note list...
 * 
 * @param {*} props 
 * @param {*} completeTodo 
 * @param {*} removeTodo 
 */
function DisplayList(props) {
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <div className="todo">
        <h3 onClick={() => props.editTodo(post.id)}>{post.title}</h3>
        {post.content}
  
        <div>
          <button onClick={() => props.removeTodo(post.id)}>x</button> 
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

/**
 * Name: App() 
 * This function is the main app, the default function the application renders.
 */
function App() {
  const [notes, setNotes] = useState([
  ]);

  // CURRENTLY NOT FUNCTIONING
  // This is for updating the note status to complete or not
  const completeTodo = index => {
    // const newTodos = [...todos];
    // newTodos[index].isCompleted = true;
    // setTodos(newTodos);
  };

  const removeTodo = id => {
    const newNotes = [...notes];
    for(var i=0; i<notesList.length; i++) {
      if(notesList[i].id === id) {
        notesList.splice(i, 1);
      }
    }
    setNotes(newNotes);
    console.log("Removing todo at index " + id); 
  };


  const editTodo = id => {
    console.log("edit todo at index " + id); 
  };

  // CURRENTLY:
  // Button "Add New Note" calls CreateNewNote function that renders AddNote.js 
  // Note List cannot be deleted, completed or modified
  return ( 
    <div className="app">
      <h1>ILISTA</h1>
      <p><i>A companion.  A simple note application</i></p>
      <br/><br/><br/><br/><br/>
      <div className="todo-list">
        <p>Note list to be displayed here...</p>
        {<DisplayList 
          posts={notesList}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />}
      </div>
      <br/><br/><br/><br/><br/>
      <div>
        <button onClick={CreateNewNote}> Add New Note</button>
      </div>
    </div>
  );
}

export default App;

