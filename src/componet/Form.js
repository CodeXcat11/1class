import React from 'react'
import './Form.css';



function Form() {
  return (
    <div id="maindiv">
         <form>
           <span>Name  :-</span>
            <input className="input13" type='text'/> <br></br>

            <span>Number :-</span>
            <input  type='number'/> <br></br>

            <span>Email:- </span>
            <input className="input13" type='email'/> <br></br>

         </form>
            
    </div>
  )
}

export default Form