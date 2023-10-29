import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './features/HomePage';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { themeLight } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <Normalize />
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();