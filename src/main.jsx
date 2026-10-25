import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import App from './App.jsx';

const rootElement = document.getElementById('home');
if (rootElement) {
  const root = createRoot(rootElement);
  // Ensure Home elements exist before the original script's DOMContentLoaded handlers run.
  flushSync(() => root.render(<App />));
}
