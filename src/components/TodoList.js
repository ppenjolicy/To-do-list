import React, { useState, useEffect } from 'react';
import { firestore } from '../index'
import './TodoList.css'

function App() {

  const [tasks, setTasks] = useState([
      {id: 1, name: "Hello, I'm your first Todo list"},
      {id: 2, name: "Smile :)"}
    ])
  const [name, setName] = useState('')

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("tasks").onSnapshot((snapshot) => {
      console.log(snapshot.docs)
      let mTask = snapshot.docs.map(d => {
        const { id, name } = d.data()
        console.log(id, name)
        return { id, name }
      })
      setTasks(mTask)
    })
  }

  const deleteTask = (id) => {
    firestore.collection("tasks").doc(id + '').delete()
  }

  const editTask = (id) => {
    firestore.collection("tasks").doc(id + '').set({ id, name })
  }

  const addTask = () => {
    let id = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].id + 1
    firestore.collection("tasks").doc(id + '').set({ id, name })
  }

  const renderTask = () => {
    if (tasks && tasks.length)
      return tasks.map((task, index) => {
        return (
        <li className="todo" key={index}>
            {task.name}
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
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
      <input placeholder="Enter your new activity..." type='text' name='name' onChange={(e) => { setName(e.target.value) }}></input>
      <ul className="list">
          <li>
           {renderTask()}
           </li>
      </ul>
      </form>
    </div>
  );
}

export default App;
