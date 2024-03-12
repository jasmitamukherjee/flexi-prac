import React,{useEffect,useState} from 'react'

export default function UseEffect() {
  const [count, setcount] = useState(0)
  const [calc, setcalc] = useState(0)
  useEffect(() => {
    setcalc(()=> count*2)
  
    
  }, [count])
  

  return (
    <>
    <div><h1>UseEffect</h1></div>
<p>Count:{count}</p>
<button onClick={() => setcount((c) => c + 1)}>
  +
</button>
<p>Calculation : {calc}</p>
    
    
    </>
  )
}
