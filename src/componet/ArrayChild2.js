import React from 'react'

function ArrayChild2(props) {
    
    let name="vishal"
    const showname=()=>{
        

    }




  return (
    <div>
        <h1>ArrayChild2 {props.subArray}</h1>
        {
            props.subArray.map((e)=>{return <h1>{e}</h1>})
        }
        <button onClick={showname}>Hit me</button>

    </div>
  )
}

export default ArrayChild2