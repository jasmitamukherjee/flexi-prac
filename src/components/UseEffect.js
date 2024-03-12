import React,{useEffect,useState} from 'react'

export default function UseEffect() {
    const [resource, setresource] = useState('Posts')
    console.log("outside effect")
useEffect(() => {
  console.log("render resource type changed")

 
},[])




  return (
    <>
    <div><h1>UseEffect</h1></div>
    <button onClick={()=>setresource("posts")}>Posts</button>
    <button onClick={()=>setresource("users")}>Users</button>
    <button onClick={()=>setresource("comments")}>Comments</button>
    <h4>{resource}</h4>
    </>
  )
}
