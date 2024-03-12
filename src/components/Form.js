import React from 'react'

export default function Form() {
    const handleSubmit=()=>{
        if(!document.getElementById('prn').value)
      {  alert("enter prn")}
    else if(!document.getElementById('cgpa').value)
   { alert("enter cgpa")}
   else{
if(document.getElementById('cgpa').value >8 )
{alert("youre eligible")}
else
{alert("not eligible")}
}
    }
  return (
    <div>
        <h1>
        Form
        </h1>

        <form>
          
        
            PRN : <input name="prn"  id="prn" placeholder='enter prn'/>
            <br/>
            CGPA : <input  id="cgpa" name="cgpa" placeholder='enter cgpa'/>
            <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
  )
}
