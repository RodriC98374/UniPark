import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './index.css';
import App from './App';
import Aside from './componets/Aside';
import reportWebVitals from './reportWebVitals';

const lona = ReactDOM.createRoot(document.getElementById('lona'));
lona.render(
  <React.StrictMode>
    <Aside/>
  </React.StrictMode>
);
reportWebVitals();