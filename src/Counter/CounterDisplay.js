import React from 'react'
import { useSelector} from 'react-redux'

const CounterDisplauy = (props) =>{
  const count = useSelector( (state) => state.counter )

  return (
    <span className="counter-text">{ count }</span>
  )
}


export default CounterDisplauy