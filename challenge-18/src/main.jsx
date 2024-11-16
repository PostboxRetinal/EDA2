import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainApp from './App.jsx'
import { AuthProvider } from './context/authContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  </StrictMode>,
)