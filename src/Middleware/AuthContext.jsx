import { createContext, useContext } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useLocalStorage('darkmode', 'light');
  const toggleDarkmode = () => setDarkmode(darkmode === 'light' ? 'dark' : 'light');

  const value = {
    darkmode,
    toggleDarkmode,
  };

  return <AppContext.Provider value={{ ...value }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
