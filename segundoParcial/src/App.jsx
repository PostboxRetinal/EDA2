import { useState } from 'react'
import { Operations } from '../components/Operations'
import { Numeros } from '../components/Numeros'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Operations/>
      <Numeros/>
    </>
  )
}

export default App
