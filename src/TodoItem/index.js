import React from 'react'



function TodoItem(props) {
  let {todo, toggleCompleted, deleteTodo} = props

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{todo.title}</p>
        <a onClick={() => toggleCompleted(todo.id)} href="#" className="card-link btn btn-primary">
          {todo.completed ? "Undo" : "Done"}
        </a>
        <a onClick={()=>deleteTodo(todo.id)} href="#" className="card-link btn btn-danger">Delete</a>
      </div>
    </div>
  )
}

export default TodoItem

