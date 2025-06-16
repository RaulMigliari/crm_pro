import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//* Import do framework de estilização Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//! Import dos componentes interativos do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
