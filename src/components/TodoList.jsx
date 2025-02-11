import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,editTodo,deleteTodo,toggleComplete}) => {
  return (
    <ul>
        {todos.map(todo => (
            <TodoItem 
                todo={todo} 
                key={todo.id}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                toggleComplete = {toggleComplete}
            />
        ))}
    </ul>
  )
}

export default TodoList