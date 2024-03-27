import React from 'react'

function First({Name , txtcolor}) {
    let clre = {color: txtcolor}
  return (
    <div > 
        <h1>Hello {Name} </h1>
        
        <h1  style={clre}>This is {txtcolor} color </h1>
    
    
    </div>

  )
}

export default First