import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { Container } from 'reactstrap';
import FacebookLogin from './components/Facebook'

function App() {
  return (
    <div className="App">
      <br /><br /><br />
      <Container className="themed-container">
        <FacebookLogin/>
      </Container>
      <br /><br /><br /><br />
    </div>
  );
}

export default App;
