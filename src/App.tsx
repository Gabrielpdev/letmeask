import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import GlobalStyle from './style/globalStyle';
import { AppProvider } from './contexts';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <Route path='/' exact component={Home}/>
        <Route path='/rooms/new' component={NewRoom}/>
      </AppProvider>
    </BrowserRouter>
  );
}