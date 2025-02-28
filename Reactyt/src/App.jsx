import React from 'react'
import { useState } from 'react'
import Card from './components/Card'
import Apicall from './components/Apicall';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';
import Header from './components/Header';

const App = () => {




  // const [a, setA] = useState(10)
  
  
  // const ChangeA= ()=>{
  //   console.log("Chal Gya");
  //   setA(20)
  // }


  // JSON 
  const user =
    [
      {
        "name": "Amit Sharma",
        "city": "Mumbai",
        "age": 28,
        "profession": "Software Engineer",
        "profile_photo": "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        "name": "Neha Verma",
        "city": "Delhi",
        "age": 25,
        "profession": "Graphic Designer",
        "profile_photo": "https://randomuser.me/api/portraits/women/2.jpg"
      },
      {
        "name": "Rahul Gupta",
        "city": "Bangalore",
        "age": 30,
        "profession": "Data Scientist",
        "profile_photo": "https://randomuser.me/api/portraits/men/3.jpg"
      },
      {
        "name": "Pooja Singh",
        "city": "Hyderabad",
        "age": 27,
        "profession": "Marketing Manager",
        "profile_photo": "https://randomuser.me/api/portraits/women/4.jpg"
      },
      {
        "name": "Vikram Yadav",
        "city": "Pune",
        "age": 32,
        "profession": "Mechanical Engineer",
        "profile_photo": "https://randomuser.me/api/portraits/men/5.jpg"
      }
    ];

  

  return (
    <div>
      {/* <h1 className='font-bold text-3xl'>Value of a is {a}</h1>
      <button onClick={ChangeA}>ChangeA</button> */}


{/* card mein username pass karne ke liye */}
      <div className='p-4 text-black'>
      {/* <Card user="Dheeraj" surname="Jaiswal" age='22' city="Patna" />  */}
      
        {user.map(function(elem,idx){
          return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} 
          photo={elem.profile_photo} profession={elem.profession} />
        })}
        </div> 

        {/* <Apicall /> */}

        <Header />

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
        </Routes>
    </div>
    

  )
}

export default App