import React, { useContext } from 'react'
import { Context } from './App';
const ChildB = () => {
    let newcontext=useContext(Context)
    // console.log(Context);
    // let newAge= useContext(data)
    console.log(newcontext);
  return (
    <div>
      <h2>I am {newcontext.name} and my age is {newcontext.age}</h2>
    </div>
  )
}

export default ChildB
