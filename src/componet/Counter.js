import React from 'react'
import { useState } from 'react';


function Counter() {
    const [counter,setCounter]=useState(0)

    let hnadleInc=()=>{
      setCounter(counter+1)
    }
    let hnadleDec=()=>{
      setCounter(counter-1)
    }
  
  return (
    <div>
        <div className='main'>
          <h2>counter-:{counter}</h2>
          <button type='button' onClick={hnadleInc}>incremnt</button>
          <button type='button' onClick={hnadleDec}>decremnt</button>

        </div>

    </div>
  )
}

export default Counter