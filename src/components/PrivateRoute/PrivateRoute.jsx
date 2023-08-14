import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserLoggedIn } from 'redux/reducers/authReducer';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
