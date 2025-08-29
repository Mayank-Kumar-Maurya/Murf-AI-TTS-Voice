import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ServerContextProvider from './Context/ServerContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ServerContextProvider>
      <App />
   </ServerContextProvider>
  </StrictMode>,
)
