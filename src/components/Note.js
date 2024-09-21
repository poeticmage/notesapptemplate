import React from "react";
import nums from "../notes";

function nt(props) {
  return (
    <div className="note">
      <h1>{props.title.substring(0, 15)}</h1>
      <p>{props.content.substring(0, 100)}</p>
    </div>
  );
}

function Note(props) {
  return nums.map(nt);
}

export default Note;
