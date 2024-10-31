import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const themeToggleButton = document.getElementById('theme-toggle');

// themeToggleButton.addEventListener('click', () => {
//   const currentTheme = document.documentElement.getAttribute('data-theme');
//   const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//   document.documentElement.setAttribute('data-theme', newTheme);
// });

