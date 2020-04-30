import React, { useState, useEffect } from 'react';
import { firestore } from '../index'
import './TodoList.css'
import { Container, Row, Col, Button } from 'reactstrap';

function App() {

  const [tasks, setTasks] = useState([
      {id: 1, name: "Hello, I'm your first Todo list", date: "26/05/62"},
      {id: 2, name: "Smile :)", date: "26/05/62"}
    ])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("tasks").onSnapshot((snapshot) => {
      console.log(snapshot.docs)
      let mTask = snapshot.docs.map(d => {
        const { id, name,date } = d.data()
        console.log(id, name,date)
        return { id, name,date }
      })
      setTasks(mTask)
    })
  }

  const deleteTask = (id) => {
    firestore.collection("tasks").doc(id + '').delete()
  }

  const editTask = (id) => {
    firestore.collection("tasks").doc(id + '').set({ id, name,date })
  }

  const addTask = () => {
    let id = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].id + 1
    firestore.collection("tasks").doc(id + '').set({ id, name,date })
  }

  const renderTask = () => {
    if (tasks && tasks.length)
      return tasks.map((task, index) => {
        return (
        <li className="todo" key={index}>
            {task.date} : {task.name}
            <a href='#' onClick={() => editTask(task.id)} style={{ marginLeft: 'auto' }}>edit</a>
            <a href='#' onClick={() => deleteTask(task.id)} style={{ marginLeft: '5px' }}>X</a>
        </li>
        )
      })
    else
      return (<li className="todo"> No task </li>)
  }

  return (
    <div className="todo-list">
      <Container>
        <Row>
          <Col>
      <h1>Todo List</h1>
      <form>
      <input placeholder="Enter your new activity..." type='text' name='name' onChange={(e) => { setName(e.target.value) }} style={{width: '50%'}}></input>
      <input placeholder="input deadline..." type='text' date='date' onChange={(e) => { setDate(e.target.value) }} style={{width: '20%'}}></input>
      <Button color="success" onClick={addTask}>Enter</Button>
      <ul className="list">
          <li>
           {renderTask()}
           </li>
      </ul>
      </form>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;