import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./components/TodoItem.js"
function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
