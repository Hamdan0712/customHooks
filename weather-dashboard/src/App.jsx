import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-lg'>Weather Dashboard</h1>
<Navbar></Navbar>

      

    </>
  )
}

export default App
