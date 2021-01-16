import React from 'react'
import "./Counter.css"

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "count" : 0
    }
  }

  handleCountChangeAction = ( action ) =>{
    if(action === "inc"){
      this.setState( { "count" : this.state.count+1 }  )
    }
    else if(action === "dec"){
      if( this.state.count > 0){
        this.setState({"count" : this.state.count-1})
      }
    } 
    else if( action ==="reset"){
      this.setState({"count" : 0})
    }
  }

  /*
  handlePlus = (event) => {
    this.setState( { "count" : this.state.count+1 }  )
  }

  handleMinus = (event) => {
    if( this.state.count > 0){
      this.setState({"count" : this.state.count-1})
    }
  }

  handleReset = (event) => {
    this.setState({"count" : 0})
  }
  */

  render(){ 
    return (
      <div className="container"> 
        <button onClick={ () => this.handleCountChangeAction("dec") } className="btn btn-danger"> - </button>
        <span className="counter-text">{ this.state.count }</span>
        <button onClick={ () => this.handleCountChangeAction("inc")}  className="btn btn-primary"> + </button>
        <button onClick={ () => this.handleCountChangeAction("reset")} className="btn btn-default">Reset</button>
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