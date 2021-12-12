import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

  function dlt() {
    props.deletenote(props.id);
  }

  return (
    <div className="note">
      <h4>{props.title}</h4>
      <p style={{  flexwrap: "wrap"}}>
      {props.message}</p>
      <button onClick={dlt}> <DeleteIcon  /> </button>
    </div>
  );
}

export default Note;
