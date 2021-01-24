import React from 'react'
import TodoItem from "../TodoItem/"
import TodoForm from "../TodoForm/"
import { getTodos } from "../api"

class Todo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      "todos": [],
      "loading": true
    }
  }

  componentDidMount() {
    // Call backend
      getTodos()
      .then((response) => {
        this.setState({ "todos": response.data , "loading": false })
      })
      .catch((error) => {
        alert("Cannot get todos")
      })
  }

  toggleCompleted = (id) => {
    let tempTodos = [...this.state.todos]  // {...OBJCT}
    for (let todo of tempTodos) {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    }
    this.setState({ "todos": tempTodos })
  }

  addTodoItem = (todo) =>{
    let tempTodos = [...this.state.todos]
    tempTodos.unshift(todo)
    this.setState({"todos" : tempTodos})
  }

  deleteTodo = (id) =>{
    // Delete API
    // Delete api is sucessfull do the below
    let filteredTodos = this.state.todos.filter( (todo)=> todo.id !== id )
    this.setState({"todos" : filteredTodos})
  }

  render() {
    return (
      <div className="mt-2">
        <TodoForm addTodoItem={this.addTodoItem}></TodoForm>
        <div className="container">
          <div>
            {
              this.state.loading
            
                ? (<div class="text-center">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>)
                : (
                  <div className="row">
                    <div className="col-md-6">
                      <h6>Todos</h6>
                      {
                        this.state.todos.map((todo) =>
                          (todo.completed === false && 
                          <TodoItem deleteTodo={this.deleteTodo} toggleCompleted={this.toggleCompleted} todo={todo} key={todo.id}></TodoItem>))
                      }
                    </div>

                    <div className="col-md-6">
                      <h6>Completed items</h6>
                      {
                        this.state.todos.map((todo) =>
                          (todo.completed === true && 
                          <TodoItem  deleteTodo={this.deleteTodo} toggleCompleted={this.toggleCompleted} todo={todo} key={todo.id}></TodoItem>))
                      }
                    </div>
                  </div>
                )
              }

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
/*

let a = 10
b = a

// a = 10 , b = 10

a = 20

// a = 20 , b = 10



let a = [1,2,3]
let b = a

// a [1,2,3] b [1,2,3]

a.push(4)

// a[1,2,3,4] b [1,2,3,4]

*/