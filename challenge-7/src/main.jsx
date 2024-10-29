import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstApp } from './components/FirstApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp />
  </StrictMode>,
)
