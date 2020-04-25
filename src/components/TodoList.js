import React, { useState } from 'react'
import './TodoList.css'

export default function TodoList(){
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])

    function handleNewTodoChange(e) {
        e.preventDefault()
        setNewTodo(e.target.value)
    }
    
    function handleNewTodo(e) {
        e.preventDefault()

        if(newTodo === '') return
        setTodos([...todos, {id: Date.now(), text: newTodo}])
        console.log(newTodo)
    }

    return(
        <div className="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={handleNewTodo}>
                <input placeholder="Your activity..." onChange={handleNewTodoChange} />
                <ul>
                    <li>Shopping</li>
                    <li>do homework</li>
                </ul>
            </form>
        </div>
    )
}