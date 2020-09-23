import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export function ProtectedRoute({ children, ...restProps }) {
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    logout
  } = useAuth0();
  const isUser = user && isAuthenticated;
  return (
    <Route
      render={() => {
        if (user && isAuthenticated) {
        }
      }}
    />
  );
}
