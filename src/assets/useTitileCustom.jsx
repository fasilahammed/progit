import React from 'react'
import { useEffect } from 'react'

function useTitileCustom(count) {
       
  const [count, setCount] = useState(1)
         useEffect(()=>{
     document.title= `count ${count}`
  },[count])
  
}

export default useTitileCustom