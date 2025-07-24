import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useTitileCustom from './assets/useTitileCustom'


function Cutom1() {
  
useTitileCustom(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count- {count}</button>
    </div>
  )
}

export default Cutom1