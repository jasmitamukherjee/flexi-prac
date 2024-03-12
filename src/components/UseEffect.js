import React,{useEffect,useState} from 'react'

export default function UseEffect() {
//     useEffect(() => {
//   console.log("render resource type changed")

 
// },[])


const [window, setwindow] = useState(0)    
const handlesize=()=>{
    setWindowWidth(window.innerWidth)
}
useEffect(() => {
  window.addEventListener('resize',handlesize)
  return ()=>{
    console.log("return from event chnage ")
  }

  
}, [])

  return (
    <>
    <div><h1>UseEffect</h1></div>
    <div>{window}</div>
    
    </>
  )
}
