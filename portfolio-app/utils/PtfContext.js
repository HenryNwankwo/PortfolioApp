import { useContext, createContext, useState } from 'react';

const PtfContext = createContext();

export const PtfProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <PtfContext.Provider value={{ theme, setTheme }}>
      {children}
    </PtfContext.Provider>
  );
};

export const usePtfContext = () => useContext(PtfContext);
