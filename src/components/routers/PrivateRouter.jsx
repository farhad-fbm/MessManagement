/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>
  }
  if (user) {
    return children;
  }
  else {
    return <Navigate state={location.pathname} to='/login' />
  }
}