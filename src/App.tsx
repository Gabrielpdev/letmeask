import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import GlobalStyle from './style/globalStyle';
import { AppProvider } from './contexts';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/rooms/new' component={NewRoom}/>
          <Route path='/rooms/:id' component={Room}/>
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}