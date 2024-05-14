import React from 'react'
import { useState ,useEffect } from 'react'
function useLocalstorage(key,initial) {
    const [data, setdata] = useState(localStorage.getItem(key) ?JSON.parse(localStorage.getItem(key)) :initial)
    useEffect(() => {
     localStorage.setItem(key,JSON.stringify(data))
    }, [data,key])
    
  return [data,setdata]
}

export default useLocalstorage