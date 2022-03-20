import React from "react";
import uuid from "react-uuid";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteTaker from "./NoteTaker";

function App() {

  const [noteList, setNoteList] = React.useState([]);

  function takeNote(title, message){
    setNoteList((previousList)=> [...previousList, {title:title, content:message, number:uuid()}]);
    console.log(noteList);
}

  function deleteNote(noteToDelete){
    setNoteList(()=>{ return(noteList.filter((note)=>{
      return (note.number !== noteToDelete)
    }))});
  }
  

  return (
    <div>
      <Header />
      <NoteTaker callback={takeNote} />
      {noteList.map((note, index) => (
        <Note key={index} number={note.number} callback={deleteNote} title={note.title} content={note.content} />
      ))} 
      <Footer />
    </div>
  );
}

export default App;
