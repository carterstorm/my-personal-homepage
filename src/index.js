import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './features/HomePage';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <HomePage />
  </React.StrictMode>
);

reportWebVitals();