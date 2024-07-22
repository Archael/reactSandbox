// Todo: Create & manage context in this file
import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [themeColor, setThemeColor] = useState('light');

  function toggleTheme() {
    if (themeColor === 'light') {
      setThemeColor('dark');
    } else {
      setThemeColor('light');
    }
  }
  const contextValue = {
    theme: themeColor,
    toggleTheme: toggleTheme,
  };
  // Todo: Add the component code (incl. dynamic context value)
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
