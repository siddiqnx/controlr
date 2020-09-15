import React, { createContext, useEffect, useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
import { authFetch } from 'utils/fetch';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const UserContext = createContext();
const { Provider } = UserContext;


export const UserProvider = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  const fetch = authFetch();

  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')))
  const [currentBuilding, setCurrentBuilding] = useLocalStorage('currentBuilding');

  const setAuthUserInfo = (userInfo) => {
    setUserInfo(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (authToken) {
        const response = await fetch.get('auth/user/');
        setAuthUserInfo(response.data);
      }
    }
    fetchUserInfo();
  }, [authToken])

  return (
    <Provider
      value={{
        userInfo,
        currentBuilding,
        setCurrentBuilding
      }}
    >
      {children}
    </Provider>
  )
}
