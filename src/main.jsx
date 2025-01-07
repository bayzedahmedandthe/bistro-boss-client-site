import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "../src/Routes/router.jsx"
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Providers/AuthProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
