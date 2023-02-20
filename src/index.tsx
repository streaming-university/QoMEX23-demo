import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/home/home';

// @ts-ignore
// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
