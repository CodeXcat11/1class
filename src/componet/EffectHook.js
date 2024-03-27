import React, { useEffect, useState } from 'react'

function EffectHook() {
    const [count, setCount]=useState(0)
    const [name, setName]=useState("Salman")

    useEffect(()=>{
        console.log("componet update");
    },[name])

    function handleName(){
      setName("rohit")  
    }

    function handleClick(){
        setCount(count+1)

    }
                      
  return (
    <div>
        <h1>This is my CounterApp</h1>
        <h2>Count {count}</h2>
        <button onClick={handleClick}>Count</button>
        <button onClick={handleName}>add Name</button>



    </div>
  )
}

export default EffectHook