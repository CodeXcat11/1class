import React, { useRef, useState } from 'react'

function RefHook() {
    
    const refElement=useRef()
    const [name ,setName]= useState("salman")
    function handleClick(){
        refElement.current.value="Spiderman"
    }
  return (
    <div>
        <input type='text' ref={refElement} value={name} onChange={(e)=>(setName(e.target.value))} />
        <button type='submit' onClick={handleClick}>submit</button>


    </div>
  )
}

export default RefHook