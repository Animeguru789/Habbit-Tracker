import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeStyles = isDarkMode
    ? {
        container: { backgroundColor: '#6d6dce' },
        text: { color: '#ffffff' },
        button: { backgroundColor: '#ff4876', color: '#ffffff' },
        switchTrack: { false: '#767577', true: '#81b0ff' },
        switchThumb: { color: '#f4f3f4' },
        progressBar: { backgroundColor: '#4CAF50' },
        progressContainer: { backgroundColor: '#333333' },
        navigation: { backgroundColor: '#ff4876' }, // Corrected key
      }
    : {
        container: { backgroundColor: '#CCE' },
        text: { color: '#000000' },
        button: { backgroundColor: '#FFe0e0', color: '#000000' },
        switchTrack: { false: '#767577', true: '#81b0ff' },
        switchThumb: { color: '#f4f3f4' },
        progressBar: { backgroundColor: '#4CAF50' },
        progressContainer: { backgroundColor: '#E0E0E0' },
        navigation: { backgroundColor: '#FFe0e0' }, // Corrected key
      };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};