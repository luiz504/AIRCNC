import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './style/global';
import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
