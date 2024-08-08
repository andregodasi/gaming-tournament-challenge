import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>
    </Router>
  );
};

export default App;
