import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HoohsApp } from './HoohsApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < HoohsApp/>
  </StrictMode>,
)
