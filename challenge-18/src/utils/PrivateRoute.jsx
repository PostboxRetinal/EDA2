import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PrivateRoute = () => {
  const { state } = useAuth();
  
  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  return <Outlet />;
};
export default PrivateRoute;