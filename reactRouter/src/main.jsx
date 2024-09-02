import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppRoutes from './Route.jsx'

createRoot(document.getElementById('root')).render(
      <AppRoutes />
)
