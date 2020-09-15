import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('token'));

  const setAuthToken = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const isAuthenticated = () => {
    if (!token) {
      return false;
    }
    return true;
  };

  return (
    <Provider
      value={{
        authToken: token,
        setAuthToken,
        isAuthenticated
      }}
    >
      {children}
    </Provider>
  )
}