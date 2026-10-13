
/*
  Archivo: main.tsx
  Función: Iniciar React y mostrar el componente principal
  dentro del elemento root de HTML.
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Busca el elemento HTML donde se mostrará la aplicación.
const rootElement = document.getElementById('root');

// Comprueba que el elemento exista antes de iniciar React.
if (!rootElement) {
  throw new Error('No se encontró el elemento #root.');
}

// Renderiza la aplicación principal.
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
