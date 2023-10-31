import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './core/App';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyles';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { themeLight } from './theme';
import isPropsValid from '@emotion/is-prop-valid'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropsValid} disableVendorPrefixes={false}>
      <ThemeProvider theme={themeLight}>
        <Normalize />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);

reportWebVitals();