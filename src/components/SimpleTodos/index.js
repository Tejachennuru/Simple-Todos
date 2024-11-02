import {useState} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

function SimpleTodos() {
  const [todos, setTodos] = useState(initialTodosList)
  const [newTodo, setNewTodo] = useState('')

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todos.length + 1, // Alternatively, use Date.now() for a unique ID
        title: newTodo,
      }
      setTodos([...todos, newTodoItem])
      setNewTodo('') // Clear input field after adding
    }
  }

  return (
    <div className="simpletodoContainer">
      <div className="todoCard">
        <h1 className="heading">Simple Todos</h1>
        <div className="inputbtnSection">
          <input
            className="input"
            placeholder="Add your task"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
          <button type="button" className="addbtn" onClick={addTodo}>
            Add
          </button>
        </div>
        {todos.length > 0 ? (
          <div className="todoitems">
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
          </div>
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  )
}

export default SimpleTodos
