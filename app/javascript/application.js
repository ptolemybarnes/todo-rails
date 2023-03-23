import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  const authenticationToken = document.head.querySelector('meta[name="csrf-token"]').content
  root.render(<App authenticationToken={authenticationToken} />);
});
