import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Form from './Form.jsx'
import Apple from './Apple.jsx'
import SlamBook from './SlamBook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form/>
    <Apple/>
    <SlamBook/>
  </StrictMode>,
)
