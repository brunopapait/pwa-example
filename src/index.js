import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerServiceWorker } from './ServiceWorker';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
