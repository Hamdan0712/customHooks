import { useState,useEffect } from 'react'

import './App.css'

function useDebounce(value,delay){

  const [debouncedValue,setDebouncedValue]=useState(value);

  useEffect(()=>{
const interval=    setInterval(()=>{
      setDebouncedValue(value);
    },delay);

     return ()=>clearInterval(interval);
  },[value])

return debouncedValue;
}


function App() {
const [input,setInput]=useState("");
const debounced=useDebounce(input,500);

  return (
    <>
    <h2>value is {debounced}</h2>
   <input type="text" onChange={(e)=>setInput(e.target.value)} />
    </>
  )
}

export default App
