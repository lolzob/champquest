import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  try {
    const rawUser = localStorage.getItem('user');
    const user = JSON.parse(rawUser);
    if (user && user.email) {
      return children;
    }
  } catch (e) {
    // optional: log error
  }

  return <Navigate to="/" replace />;
};

export default PrivateRoute;
