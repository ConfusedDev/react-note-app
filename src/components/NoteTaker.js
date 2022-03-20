import React from "react";

function NoteTaker(props){

  const [noteTitle, setNoteTitle] = React.useState("");
  const [noteContent, setNoteContent] = React.useState("");

  function handleChange(event){
    event.target.id === "titleInput"?
    setNoteTitle(event.target.value):
    setNoteContent(event.target.value);
  }

  function handleSubmit(event){
    props.callback(noteTitle, noteContent);
    event.preventDefault();
    setNoteTitle("");
    setNoteContent("");
  }

  return (
    <div className="note-taker">
      <form onSubmit={handleSubmit}>
      <label htmlFor="noteTitle">Title</label>
      <input type="text" onChange={handleChange} value={noteTitle} id="titleInput" required="true"/>
      <label htmlFor="noteContent">Note</label>
      <textarea onChange={handleChange} value={noteContent} cols="30" rows="8" required="true" maxLength={140}></textarea>
      <button type="submit">+</button>
      </form>
    </div>
  );
}

export default NoteTaker;
