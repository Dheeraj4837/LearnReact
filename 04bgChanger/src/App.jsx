import { useState } from 'react'


function App() {
  const [color, setColor] =useState("#DECBA4")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-2xll bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700 hover:bg-red-800' >Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700 hover:bg-green-800' >green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-800 hover:bg-blue-900' >blue</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-400 hover:bg-yellow-500' >yellow</button>
          <button onClick={() => setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-950 hover:bg-orange-900' >brown</button>
        </div>
      </div>

    </div>
  )
}

export default App
