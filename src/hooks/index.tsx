import React from 'react';
import GlobalStyle from '../styles/global';
import { CupProvider } from './useCup';
import { AppThemeProvider } from './useTheme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CupProvider>
      <AppThemeProvider>
        {children}
        <GlobalStyle />
      </AppThemeProvider>
    </CupProvider>
  );
};

export default AppProvider;
