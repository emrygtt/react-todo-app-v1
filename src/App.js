import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="todo-app">
      <h1>ToDO app with React!</h1>
      <TodoList/>
      <a href="https://www.linkedin.com/in/emryigit/" target="_blank" className="linkedin-a">Emre YIGIT</a>
    </div>
  );
}

export default App;
