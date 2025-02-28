import React from 'react'
import Header from './components/Header'
import Contact from './pages/Contact'
import Product from './pages/Product'
import About from './pages/About'
import Home from './pages/Home'
import UserContext, { DataContext } from './context/UserContext'
import { useContext } from 'react'

const App2 = () => {
    const data = useContext(DataContext) //data ko recive karne ke liye use hoga
    console.log(data);
    

  return (
    <div>
        <h1>This is App 2{data}</h1>
        <Contact />
        <Product />
        <About />
        <Home />
        
    </div>
  )
}

export default App2