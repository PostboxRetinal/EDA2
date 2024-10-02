import { useState } from 'react'
import { GiftExpertApp } from './components/GiftExpertApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GiftExpertApp/>
    </>
  )
}

export default App
