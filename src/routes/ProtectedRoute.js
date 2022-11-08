import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, redirectTo }) {
  const token = localStorage.getItem('token');
  if (token) {
    return children;
  }
  return <Navigate to={redirectTo} />;
}