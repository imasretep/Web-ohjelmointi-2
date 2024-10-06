import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AthletesProvider } from './context/athletesContext';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <AthletesProvider>
    <App />
  </AthletesProvider>)

