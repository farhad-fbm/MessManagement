import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Root } from './Root'
import { RouterProvider } from 'react-router-dom'
import { MainRouter } from './components/routers/MainRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={MainRouter}>
    <Root/>
   </RouterProvider>
  </StrictMode>,
)
