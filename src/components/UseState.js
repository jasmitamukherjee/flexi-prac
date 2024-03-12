import React,{useState} from 'react'

export default function UseState() {
    const [counter, setstate] = useState(0)
    

    const increment=()=>{
        
        setstate(counter+1)

    }
    const decrement=()=>{
       
        setstate(counter-1)
    }
  return (
    <div>
      <h1>UseState</h1>
      <button onClick={increment}>+</button>
      <span>{counter}</span>
      <button onClick={decrement}>-</button>

    </div>
  )
}
