import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Todo from "./to-do";
import CA from "./contentarea";

function App() {
  const [notes, setnotes] = useState([]);

  function addN(note) {
    setnotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteN(id) {
    setnotes((prevValue) => {
     return prevValue.filter((e, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CA addnote={addN} />

      {notes.map((e, index)=> {
        return (
          <Note
            id={index}
            key={index}
            title={e.title}
            message={e.content}
            deletenote={deleteN}
          />
        );
      })}

     {/* <Footer /> */}
    </div>
  );
}

export default App;
