import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../contexts/Context';

const PrivateRoute = ({children}) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return children ? children : <Outlet/>;
};
// Define propTypes for AuthProvider
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };


export default PrivateRoute;

