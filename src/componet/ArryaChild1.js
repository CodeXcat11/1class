import React from 'react'
import ArrayChild2 from './ArrayChild2'

function ArryaChild1() {
    const array=[1,2,3,4,5]
    

   
  return (
    <div>
        <ArrayChild2 subArray={array}/>

    </div>
  )
}

export default ArryaChild1