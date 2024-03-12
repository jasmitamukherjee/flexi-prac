import React, { useContext } from 'react'
import UserContext from '../App'
export default function UseContext(props) {
    const user=useContext(UserContext)
  return (
    <>
    <div>
        <h1>UseContext</h1></div>
    <p>
        {`hello ${props.name}`}

    </p>
    </>

  )
}
