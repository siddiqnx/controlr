import React, { createContext, useState } from 'react';

export const SidebarContext = createContext();
const { Provider } = SidebarContext;

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Provider
      value={{
        open,
        setOpen
      }}
    >
      {children}
    </Provider>
  )
}