import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage'
import './assets/styles/styleguide.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)
