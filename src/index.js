import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.dark.css';
import GlobalStyle from 'style/globalStyle';
import Reset from 'style/reset'
import theme from 'style/theme';
import { AuthProvider } from 'contexts/AuthContext';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from 'contexts/UserContext';
import { SidebarProvider } from 'contexts/SidebarContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <SidebarProvider>
            <Reset />
            <GlobalStyle />
            <App />
          </SidebarProvider>
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);