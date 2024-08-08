import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import usePersistedState from './usePersistedState';

interface IAppThemeContextData {
  theme: object;
  toggleTheme(): void;
}

const AppThemeContext = createContext<IAppThemeContextData>(
  {} as IAppThemeContextData,
);

const AppThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState(
    'theme',
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? dark
      : light,
  );

  const toggleTheme = (): void => {
    setTheme(theme.title === 'dark' ? dark : light);
  };

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

function useTheme(): IAppThemeContextData {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a AppThemeProvider');
  }
  return context;
}

export { AppThemeProvider, useTheme };
