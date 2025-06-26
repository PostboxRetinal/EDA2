import { useState } from 'react'
import { MultipleCustomHook } from './components/MultipleCustomHook'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MultipleCustomHook/>
    </>
  )
}

export default App
