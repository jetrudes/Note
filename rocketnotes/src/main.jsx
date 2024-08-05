import React from 'react';
import reactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { Routes } from './components/routes';

reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
)