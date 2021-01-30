import React from 'react'
import TodoItem from "../TodoItem/"
import TodoForm from "../TodoForm/"
import { getTodos } from "../api"
import { useState , useEffect } from 'react'

const TodoFunctional = (props) => {

  const [ todos,  setTodos ] = useState( [] )
  const [ loading, setLoading] = useState( true )

  useEffect(()=>{
    getTodos()
    .then((response) => {
      setTodos(response.data)
      setLoading(false)
    })
    .catch((error) => {
      alert("Cannot get todos")
    })
  }, [])

  const toggleCompleted = (id) => {
    let tempTodos = [...todos]  // {...OBJCT}
    for (let todo of tempTodos) {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    }
    setTodos(tempTodos)
  }

  const addTodoItem = (todo) =>{
    let tempTodos = [...todos]
    tempTodos.unshift(todo)
    setTodos(tempTodos)
  }

  const deleteTodo = (id) =>{
    // Delete API
    // Delete api is sucessfull do the below
    let filteredTodos = todos.filter( (todo)=> todo.id !== id )
    setTodos(filteredTodos)
  }

  return (
      <div className="mt-2">
        <h5>Todo Functional</h5>
        <TodoForm addTodoItem={addTodoItem}></TodoForm>
        <div className="container">
          <div>
            {
              loading

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
                        todos.map((todo) =>
                        (todo.completed === false &&
                          <TodoItem deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} todo={todo} key={todo.id}></TodoItem>))
                      }
                    </div>

                    <div className="col-md-6">
                      <h6>Completed items</h6>
                      {
                        todos.map((todo) =>
                        (todo.completed === true &&
                          <TodoItem deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} todo={todo} key={todo.id}></TodoItem>))
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

export default TodoFunctional