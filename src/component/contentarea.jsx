import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';

function CA(props) {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });
  function handle_change(event) {
    const {name, value} = event.target;
    setnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addN(event)
  {
    if(note.title!= "" && note.content!= ""){
   event.preventDefault();
   props.addnote(note);

   setnote({
       title: "",
       content: ""
   });
  }
  }

  return (
    <div className="note">
    <form>
      <input
        name="title"
        placeholder="title"
        style={{ border: "none" }}
        onChange={handle_change}
        value={note.title}
      required />

      <textarea
        name="content"
        placeholder="Add note here"
        style={{ border: "none", resize: "none" }}
        value={note.content}
        onChange={handle_change}
        rows="4"
    required  />
      <button onClick={addN}><AddCircleIcon /> </button>
      </form>
    </div>
  );
}

export default CA;
