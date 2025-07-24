import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useTitileCustom from './assets/useTitileCustom'


function Cutom2() {
  const [count, setCount] = useState(1)

  useTitileCustom(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>cont- {count}</button>
    </div>
  )
}

export default Cutom2