import React from 'react'

function TodoItem(props) {
  return (
    <div className="card" key={props.todo.id}>
    <div className="card-body">
      <p className="card-text">{props.todo.title}</p>
      <a href="#" className="card-link btn btn-primary">Done</a>
      <a href="#" className="card-link btn btn-danger">Delete</a>
    </div>
  </div>
  )
}

export default TodoItem