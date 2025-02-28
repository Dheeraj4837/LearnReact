import React, { useState } from 'react'

function TodoList() {
    const [Tasks,setTasks]= useState([{id:1, 'title':'Content writting','desc':'write content about React', 'complete':false}])
        console.log(Tasks);
        const [NewTask,setNewTask]= useState("");
        const [NewDesc,setNewDesc]= useState("");

        const add=()=>{
            setTasks([...Tasks, {id:Tasks.length, title:NewTask , desc:NewDesc,complete:false}])
        }

  return (
    <div className='todo'>TodoList
        <ul>
            {Tasks.map((e)=>(
                <li className='list-item' key={e.id}>
                    <h5>{e.title}</h5>
                    <small>{e.desc}</small>
                    <br />
                    <small>{e.complete?"Completed":"Pending"}</small>
                    <br />
                    <br />
                    <button onClick={()=>{
                        change(e.id)
                    }}>{e.complete?"Delete":"Completed"}</button>

                </li>
            ))}
        </ul>
        <input type="text" value={NewTask} onChange={(e)=>{setNewTask(e.target.value)}} />
        <input type="text" value={NewDesc} onChange={(e)=>{setNewDesc(e.target.value)}} />
        <br />
        <button onClick={add}>Add</button>
    </div>
  )
}

export default TodoList