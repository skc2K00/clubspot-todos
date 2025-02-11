import React, { useEffect, useState } from 'react'

const TodoForm = ({addTodo,currentTodo,updateTodo}) => {

    const [input,setInput] = useState('');

    useEffect(() => {
        if(currentTodo) {
            setInput(currentTodo.text);
        } else {
            setInput('')
        }
    },[currentTodo])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentTodo) {
            updateTodo(currentTodo.id,input)
        } else {
            addTodo(input);
        }   
        setInput('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={input} required onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>
            {currentTodo ? "Update Todo" : "Add Todo"}
        </button>
    </form>
  )
}

export default TodoForm