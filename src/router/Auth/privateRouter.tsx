import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { IRootState } from '../../modules/reducers/state';
const PrivateRouter = ({ component: Component, path }: RouteProps) => {
  let isAuthenticated = localStorage.getItem('token')
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  } 

  return <Route component={Component} path={path} />;
};

export default PrivateRouter;
