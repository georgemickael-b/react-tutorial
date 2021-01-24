import React from 'react'
import { saveTodo } from "../api"

class TodoForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "title" : ""
    }
  }

  handleTitleChange = (event) => {
    this.setState({title : event.target.value})
  }

  onSubmit = (event) =>{
    event.preventDefault()
    // Post the value to the server 
    const data = {
      "userId": 12,
      "completed" : false,
      "title" : this.state.title
    }

    saveTodo(data)
    .then((response)=>{
      console.log(response)
      this.props.addTodoItem(data)
      this.setState({"title" : ""})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render(){
    return(
      <div className="container">
        <div className="card card-body bg-light mb-3">
        <form onSubmit={this.onSubmit}>
          <label>Enter description of the todo item </label>
          <input value={this.state.title} onChange={this.handleTitleChange} className="form-control mb-1" type="text"></input>
          <button type="submit" className="btn btn-primary"> Add Todo </button>
        </form>
        </div>
      </div>
    )
  }
}

export default TodoForm