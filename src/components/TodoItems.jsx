import React, { useState } from "react";

function TodoItems(props) {
  const [isDone, setIsDone] = useState(false);
  const handleClick = () => {
    setIsDone((prev) => {
      return !prev;
    });
  };
  const handledelete = () => {
    props.onDelete(props.name);
  };
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.name}
      </li>
      <button onClick={handledelete}>Delete</button>
    </div>
  );
}
export default TodoItems;
