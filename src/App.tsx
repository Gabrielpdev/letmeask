import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import {
//   RouteProps as ReactDOMRouteProps,
//   Route as ReactDOMRoute,
//   Redirect,
// } from 'react-router-dom';

import { GlobalStyle } from './style/globalStyle';
import { AppProvider } from './contexts';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';
import { useAuth } from './contexts/auth';

export default function App() {
  const { user } = useAuth();

  console.log(user)
  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/rooms/new' component={NewRoom}/>
          <Route path='/rooms/:id' component={Room}/>

          <Route path='/admin/rooms/:id' 
            render={({ location }) => {
              return user ? (
                <AdminRoom />
              ) : (
                <AdminRoom />

                // <Redirect
                //   to={{
                //     pathname: '/',
                //     state: { from: location },
                //   }}
                // />
              );
            }}
          />
        </Switch>
        <GlobalStyle />
      </AppProvider>
    </BrowserRouter>
  );
}