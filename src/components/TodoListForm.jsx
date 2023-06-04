import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";

function TodoListform() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedItems = localStorage.getItem("todos");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save todos to local storage whenever the items state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  const addItemsInTheList = () => {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText("");
    }
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleDelete = (itemName) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemName));
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button style={{ cursor: "pointer" }} onClick={addItemsInTheList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((itemsToDo, index) => (
            <TodoItems key={index} name={itemsToDo} onDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListform;
