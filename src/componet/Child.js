import React from 'react'
import SubChild from './SubChild'

function Child(props) {
  let name=2
  const handle=()=>{
    props.value1(name)

  }
  return (
    <div>
    <h1>Child {props.value} </h1>
    <SubChild subvalue={props.value}/>
    <button onClick={handle}/>
    </div>
  )
}

export default Child