import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { ThemeCont } from './App';

function UseContext() {


    const {theme} =useContext(ThemeCont)
  
    
    const textStyle={
        backgroundColor:theme ==="light"?"white":"black",
        color:theme ==="light"?"black":"white",
        
    }

  return (
    <div>
        <p style={textStyle}>fasil</p>
     
   
    </div>
  )
}

export default UseContext