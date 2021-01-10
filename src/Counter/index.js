import React from 'react'
import "./Counter.css"

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "count" : 0
    }
  }

  handlePlus = (event) => {
    console.log("Handle Pluse is called")
    this.setState( { "count" : this.state.count+1 }  )
  }

  render(){ 
    return (
      <div className="container"> 
        <button className="btn btn-danger"> - </button>
        <span className="counter-text">{ this.state.count }</span>
        <button onClick={this.handlePlus}  className="btn btn-primary"> + </button>
      </div>
    )
  }
}

//Asssignment
// imlepement minus button. The count value should not be lesser than 0
// implement a rest button. Should set count to 0



/*
function Counter( props ){
  return (
    <div className="container">
      <button className="btn btn-danger"> - </button>
      <span className="counter-text">{ props.count }</span>
      <button className="btn btn-primary"> + </button>
    </div>
  )
}
*/

export default Counter

// Difference between normal function and arrow function