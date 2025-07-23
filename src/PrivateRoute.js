import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user'); // sau orice folosești ca să verifici loginul

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
