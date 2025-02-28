import React, { useEffect, useState } from 'react'

function Counter() {
    var [c,setC]=useState(0);
    function change(){
        setC(c+1)
    }

    useEffect(()=>{
        console.log("Hello I'm Function");
        
    })
  return (
    <div>
        <h5>Hello World {c}</h5>
        <button onClick={()=>{
            change()
        }}>Change</button>
    </div>
  )
}

export default Counter