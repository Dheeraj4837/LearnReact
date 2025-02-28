import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-2xl'>Dheeraj Jaiswal</h2>
        <div className='flex gap-10  text-lg underline'>
            {/* <a className='text-xl underline' href="/">Home</a>
            <a className='text-xl underline' href="/about">About</a>
            <a className='text-xl underline' href="/contact">Contact</a>
            <a className='text-xl underline' href="/product">Product</a> */}
           {/* => ancor tag reload thora leta hain usko hatane ke liye Link tag ka use karte hain */}

           {/* => link tag bilkul bhi reload nai leta multiple page me move karne par */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Header