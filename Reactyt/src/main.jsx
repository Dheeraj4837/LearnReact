import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FormHandling from './FormHandling'
import './index.css'
import Component from './Component'
// import Card from './components/Card'
import {BrowserRouter} from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  
  <>
  
  <Component/>
  {/* <Card /> */}
{/* <FormHandling/> */}

    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <UserContext>
      <App2 />
    </UserContext>
  </>
  
)
