import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavComponent from './components/NavComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavComponent />
  </StrictMode>,
)
