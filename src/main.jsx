import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);