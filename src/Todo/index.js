import React from 'react'
import TodoItem from "../TodoItem/"

let todos = [
  {
    "userId": 1,
    "id": 1,
    "title": "Buy Milk",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Do project",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  }
]

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "todos": todos
    }
  }

  render() {
    return (
      <div>
        <h5>Todo App</h5>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6>Todos</h6>
              {
                this.state.todos.map((todo) => 
                ( todo.completed === false && <TodoItem todo={todo} key={todo.id}></TodoItem>))
              }
            </div>

            <div className="col-md-6">
              <h6>Completed items</h6>
              {
                this.state.todos.map((todo) => 
                ( todo.completed === true && <TodoItem todo={todo} key={todo.id}></TodoItem>))
              }
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Todo


/*
let a = 10
a<10 ? <span>a lesser than 10</span> : <span>  a is not lesser than 10</span>
*/