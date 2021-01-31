import React from 'react'
import "./Counter.css"
import CounterDisplay from './CounterDisplay'
import { useSelector , useDispatch} from "react-redux"
import { reset, increment, decrement } from "../actions/counter"

function Counter(props) {
  const count = useSelector( (state) => state.counter )
  const dispatch = useDispatch()

  const handleCountChangeAction = (action) => {
    if (action === "inc") {
      dispatch( increment() )
    }
    else if (action === "dec") {
      if (count > 0) {
        dispatch( decrement() )
      }
    }
    else if (action === "reset") {
      dispatch( reset() )
    }
  }

  return (
    <div className="container">
      <button onClick={() => handleCountChangeAction("dec")} className="btn btn-danger"> - </button>
      <CounterDisplay></CounterDisplay>
      <button onClick={() => handleCountChangeAction("inc")} className="btn btn-primary"> + </button>
      <button onClick={() => handleCountChangeAction("reset")} className="btn btn-default">Reset</button>
    </div>
  )

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