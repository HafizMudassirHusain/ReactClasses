import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './context/UserContext.jsx'
import { NextUIProvider } from '@nextui-org/react'

createRoot(document.getElementById('root')).render(

    <NextUIProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </NextUIProvider>
   
  
)
