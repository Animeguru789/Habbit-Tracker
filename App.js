import React, { useContext } from 'react';
import AppNavigation from './AppNavigations/AppNavigation';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

const ThemedApp = () => {
  const { themeStyles } = useContext(ThemeContext); // Access themeStyles from ThemeContext
  return <AppNavigation themeStyles={themeStyles} />;
};

export default App;
