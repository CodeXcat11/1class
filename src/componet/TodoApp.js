import React, { useState } from 'react'
import './Todo.css'

function TodoApp() {
    const [schedule,setSchedule]=useState("")
    const [list,setlist]=useState([])
    const [showClearButton, setShowClearButton] = useState(false);
    function handlelist(){
        console.log(schedule);
        setlist((list)=>{
            const updatelist=([...list,schedule])
            console.log(updatelist);
            return updatelist
        })
        setSchedule("")
        setShowClearButton(true);
        
    }
    function handleRemove(i){
    const RemoveItem = list.filter((ele, id)=>{
    return id!=i
    })
    setlist(RemoveItem)
    }
    function handleClearAll() {
        setlist([]);
        setShowClearButton(false);
    }
  
  return (
    < div className='maindiv'>
        <input type='text' placeholder='Add Tittle' id="inputbox"  value={schedule} onChange={(e)=>{setSchedule(e.target.value)}} />
        <button className="button" type='submit' onClick={handlelist}>Submit</button>
        
        <h3>Here Is Your Today's Schedule:-</h3>
        {showClearButton && (
        <button onClick={()=>handleClearAll()} className='removeall' >Remove All</button> )}
        
        {
            list!=[] && list.map((data,i)=>{
                // return <p>{(i+1)+":"+data}</p>
                return <>
                    <p key={i} style={{display:'flex'}}>
                        <div>{(i+1)+":"+data}</div>
                        <div><button onClick={()=>handleRemove(i)}  id="removeButton">X</button></div>
                    </p>                
                </>                
            })
        }
    </div>
  )
}

export default TodoApp