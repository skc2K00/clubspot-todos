import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {

  const [todos,setTodos] = useState([]);
  const [currentTodo,setCurrentTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos,{id: Date.now(),text: todo,completed: false}])
  }

  const editTodo = (todo) => {
    setCurrentTodo(todo);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const updateTodo = (id,newText) => {
    setTodos(todos.map(todo => (todo.id == id ? {...todo,text:newText} : todo)));
    setCurrentTodo(null);
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, completed : !todo.completed} : todo
    )))
  }

  return (
    <>
      <h1>todo</h1>
      <TodoForm addTodo={addTodo} currentTodo={currentTodo} updateTodo={updateTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </>
  )
}

export default App
