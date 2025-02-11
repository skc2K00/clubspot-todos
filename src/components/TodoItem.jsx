import React from 'react'

const TodoItem = ({todo,editTodo,deleteTodo,toggleComplete}) => {
  return (
    <div>
        <input type='checkbox' checked={todo.complete} onChange={() => toggleComplete(todo.id)} />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
        <button onClick={() => editTodo(todo)}>Edit Todo</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
    </div>
    
  )
}

export default TodoItem