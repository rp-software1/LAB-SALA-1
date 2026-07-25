import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { PedidoProvider } from './context/PedidoContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PedidoProvider>
      <App />
    </PedidoProvider>
  </StrictMode>,
)
