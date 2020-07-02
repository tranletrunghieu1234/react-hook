import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Tôi tên la hiếu" },
    { id: 2, title: "Tôi ăn cơm" },
    { id: 3, title: "Tôi hủ tiếu mì" },
  ]);
  function handleToDoClick(todo) {
    const index = todoList.findIndex((item) => item.id === todo.id);
    if (index === -1) return;
    let newArr = [...todoList];
    newArr.splice(index, 1);
    setTodoList(newArr);
  }
  function handleTodoOnSubmit(value) {
    console.log("value", value);
    //add new current todoList
    let newArr = [...todoList];
    const newvalue = {
      id: newArr.length + 1,
      ...value,
    };
    console.log("newArr", newArr);
    newArr.push(newvalue);
    console.log("newArr", newArr);
    setTodoList(newArr);
  }
  return (
    <div className="App">
      <h1>React hook todoList</h1>
      {/* <ColorBox /> */}
      <TodoForm onSubmit={handleTodoOnSubmit} />
      <TodoList todoArr={todoList} onToDoClick={handleToDoClick} />
    </div>
  );
}

export default App;
