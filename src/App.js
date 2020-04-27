import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import TodoList from './components/TodoList';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <br/><br/><br/>
      <Container className="themed-container">
      <TodoList/>
      </Container>
      <br/><br/><br/><br/>
    </div>
  );
}

export default App;
