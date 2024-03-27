import './App.css';

// import Counter from './componet/Counter';
// import Data from "./Data.json"
// import Form from "./componet/Form"
import React, { createContext, useState } from 'react'
// import RefHook from './componet/RefHook';
import ChildB from './ChildB';
import EffectHook from './componet/EffectHook';
import First from './componet/First';
import MUi from './componet/MUi';
// import RefHook from './componet/RefHook';
// import ArryaChild1 from './componet/ArryaChild1';
// import Child from './componet/Child';
// import TodoApp from './componet/TodoApp';
// import Webpage from './componet/Webpage';


export let Context=createContext()
// let data=createContext()
function App() {
  const name= "Salman"
  const age=23
  // const[val,setVal]=useState(1)
  
  return (
    <div>
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <RefHook/> */}
      {/* <RefHook/> */}
      {/* <TodoApp/> */}
      {/* <EffectHook/> */}
      {/* <Webpage/> */}
      {/* <h4>fhd={val}</h4> */}
      {/* <Child value={val} value1={setVal}/> */}
      {/* <ArryaChild1/> */}
      {/* <Context.Provider value={{name,age}} >
          <ChildB/>
      </Context.Provider> */}
      {/* <First Name="Salman" txtcolor="blue"/>
      <First Name="World" txtcolor="red"/>
    <First Name="Java" txtcolor="purple"/> */}
    <MUi/>



      
    </div>
  )
}
export default App
// export {Context}

