import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './helpers/routes';

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Switch>
            <ProtectedRoute path='/' exact>
              <Dashboard></Dashboard>
            </ProtectedRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
