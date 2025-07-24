import { useState } from 'react'
import './App.css'
import Pratice from './pratice'
import UseReduce from './useReducer'
import UseContext from './useContext'
import { createContext } from 'react'
import Cutom1 from './Cutom1'
import Cutom2 from './Custom2'

export const ThemeCont =createContext();

function App() {
  const [theme, setTheme]= useState (0)

  
    const toggle =()=>{
        setTheme((curr)=>(curr==="light"?"dark":"light"))
     }
  
  return (
    <>
    <ThemeCont.Provider
     value={{
      theme:theme,
      
      }}>
    
       <button onClick={toggle}>theme</button>  

      <h1>App comp</h1>
      
      {/* <UseContext /> */}
      {/* <Pratice /> */}
    {/* <UseReduce /> */}


    
    </ThemeCont.Provider>

    <Cutom1 />
    <Cutom2 />
    </>
  )
}

export default App
