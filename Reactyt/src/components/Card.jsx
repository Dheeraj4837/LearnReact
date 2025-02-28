import React from 'react'
import Navpart2 from './Navpart2';

const Card = (props) => {

    console.log(props.photo); //yea console par JSON ko show karne ke liye 
    
  return (
    <div className=' mr-8 bg-black text-white inline-block p-6 text-center rounded-2xl '>
      <img className='ml-5 w-32 h-32 rounded-full mb-3' src={props.photo} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.username} {props.surname} </h1>
        <h4 className='text-blue-500'>{props.profession}</h4>
        <h2> {props.city},{props.age} </h2>
        <button className=' mt-5 bg-emerald-400 text-white px-4 py-2 rounded font-medium'>Add Friend</button>

        
    </div>
  )
}

export default Card