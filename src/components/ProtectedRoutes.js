import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function ProtectedRoutes(props) {
  const { component: Component,...rest } = props;
  const { user } = useSelector((state) => state.login);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => (user ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{ pathname: '/', state: { referrer: location.pathname } }}
        />
      ))}
    />
  );
}