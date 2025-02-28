import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "Dheeraj",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Text</h1>
     
     <Card userName= "Dheeraj Jaiswal" btnText = "Click me" />
     <Card userName= "CodeFlick" btnText="visit me" />
    </>
  )
}

export default App
