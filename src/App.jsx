import { useState } from 'react'
import './App.css'
import { Navbar } from './Componenet/nav/Navbar'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Navbar></Navbar>
      <h1 className='text-center'>mehedi hasan</h1>
    </>
  )
}

export default App
