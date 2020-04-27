import React, { useState } from 'react'
import './TodoList.css'

export default function TodoList(){
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([
        {id: 1, text: "Hello, I'm your first Todo list"},
        {id: 2, text: "Smile :)"}
    ])

    function handleNewTodoChange(e) {
        e.preventDefault()
        setNewTodo(e.target.value)
    }
    
    function handleNewTodo(e) {
        e.preventDefault()

        if(newTodo === '') return
        setTodos([...todos, {id: Date.now(), text: newTodo}])
        e.target.reset()
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id != id))
    }

    return(
        <div className="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={handleNewTodo}>
                <input placeholder="Your activity..." onChange={handleNewTodoChange} />
                <ul className="list">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todo">
                            {todo.text}
                            <a href='#' onClick={() => removeTodo(todo.id)}>
                                X
                            </a>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}