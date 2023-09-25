import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom

import App from './App';

const root = createRoot(document.getElementById('root')); // Use createRoot to create a root instance
root.render(<App />);
