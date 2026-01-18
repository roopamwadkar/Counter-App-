import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter, setcounter]=useState(1)

  const incvalue=()=>{
    if(counter<20){
    setcounter(counter+1)
    }
  }

  const decvalue=()=>{
    if(counter>0){
    setcounter(counter-1)
    }
  }


  return (
    <>
     <h1>Counter Value: {counter}</h1>
     <button onClick={incvalue}>Increase Value</button>
     <button onClick={decvalue}>decrease Value</button>
    </>
  )
}

export default App
