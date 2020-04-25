import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
