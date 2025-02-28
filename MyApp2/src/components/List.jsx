import React from 'react'

function List() {
    const arr=["Apple", "Mango", "Banana", "Guava"];
  return (
    <div>
        <ul>
            {arr.map((e,i)=>(
                <li key={i} >{e}</li>
            ))}
        </ul>
    </div>
  )
}

export default List