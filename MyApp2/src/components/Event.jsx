import React from 'react'

function Event() {

    const [count, setCount] = useState(0);
  const [name, setName]= useState("Dheeraj Jaiswal");
   const a=()=>{
    setCount(count+1)
   }

   const reg =(e)=>{
    e.preventDefault();
    console.log(name);
    setName("")
    
  }
  return (
    <>
   
    </>
  )

  return (
    
    <>
      <div className='box' onMouseOver={
        (e)=>{
          e.target.style.backgroundColor="yellow";
        }}
        
        onMouseOut={(e)=>{
          e.target.style.backgroundColor="red";
  
        }}
        ></div>
        <button onClick={a}>Count {count}</button>
  
  
  
        <form onSubmit={reg}>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <input type="submit" value="Submit"/>
        </form>
    
    
    </>
  
  )
}

export default Event