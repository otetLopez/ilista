import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./scripts/note.js";
import AddNotePage from './scripts/addNote.js';

const INFO_LOG = "INFO_DEBUG: ";
var notesList = [];

/**
 * ROSETTE: TODO! THIS IS NOT WORKING YET
 * Todo function is responsible to display the list of existing notes in the main page
 * @param {} param0 
 */
function Todo({ todo, index, completeTodo, removeTodo }) {
  console.log(INFO_LOG + "Todo is called with " + todo.text)
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

/**
 * PushNote(newNote)
 * This exported function allows other modules to push newNote object into global variable noteList Array
 * @param {Note} newNote 
 */
export function PushNote(newNote) {
  console.log("I received title " + newNote.title);
  console.log("I received content " + newNote.content);
  notesList.push(newNote);
}

/**
 * Name: CreateNewNote() 
 * This function routes user to add new note view.  Called when "Add New Note" button is called.
 */
function CreateNewNote() {
    console.log("CreateNewNote")
    const where = document.getElementById("root");
    ReactDOM.render(<AddNotePage/>, where);
}

/**
 * Name: App() 
 * This function is the main app, the default function the application renders.
 */
function App() {
  const [todos, setTodos] = useState([
  ]);

  // CURRENTLY NOT FUNCTIONING
  // This is for updating the note status to complete or not
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

    // CURRENTLY NOT FUNCTIONING
  // This is for deleting a note 
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // CURRENTLY NOT FUNCTIONING
  // This is supposed to update the list being pushed to noteList
  // Reference :
  //      See global variable : var noteList = [];
  //      See function PushNote(newNote) function where new notes are added in noteList.  only AddNote.js calls this
  const addTodo = newNote => {
    console.log("I am in addTodo")
    const newTodos = [...todos, { newNote }];
    setTodos(newTodos);
  };

  // CURRENTLY ONLY RENDERS VIEWS.  MISSING NOTELIST, DIV CLASSNAME TODO-LIST DOES NOT WORK YET.
  // Button "Add New Note" calls CreateNewNote function that renders AddNote.js 
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
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        ))}
      </div>
      <br/><br/><br/><br/><br/>
      <div>
        <button onClick={CreateNewNote}> Add New Note</button>
      </div>
    </div>
  );
}

export default App;

