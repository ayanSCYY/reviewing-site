// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import './index.css'; // Import TailwindCSS styles

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
