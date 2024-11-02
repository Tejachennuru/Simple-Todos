// TodoItem.js
import './index.css'

const TodoItem = ({todo, deleteTodo}) => (
  <div className="todoContainer">
    <p id={todo.id}>{todo.title}</p>
    <button
      type="button"
      className="DeleteButton"
      onClick={() => deleteTodo(todo.id)}
    >
      Delete
    </button>
  </div>
)

export default TodoItem
