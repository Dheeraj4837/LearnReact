import React, { Children } from 'react'
import { createContext } from 'react'

export const DataContext = createContext() //data provide karne ka kaamkarta hain

const UserContext = ({children}) => {
    
    const username = "Dheeraj"
    
  return (
    <div>
       <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider> 
        
    </div>
  )
}

export default UserContext