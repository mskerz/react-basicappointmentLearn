import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AppointmentProvider } from './context/AppointmentContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppointmentProvider>
        <App />
    </AppointmentProvider>
  </StrictMode>,
)
