import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export function ProtectedRoute({ children, ...restProps }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const isUser = user && isAuthenticated;
  return (
    <Route
      {...restProps}
      render={() => {
        if (user && isAuthenticated) {
          return children;
        }
        if (!user) {
          return <Redirect to={'login'} />;
        }
      }}
    />
  );
}
