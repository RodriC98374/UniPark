import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './index.css';
import App from './App';
import Aside from './componets/Aside';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const crea = ReactDOM.createRoot(document.getElementById('creacion'));
crea.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
