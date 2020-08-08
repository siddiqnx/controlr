import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from 'style/globalStyle';
import Reset from 'style/reset'
import theme from 'style/theme';

import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);