
import { Redirect, Route, RouteProps } from 'react-router-dom';

const PrivateRouter = ({ component: Component, path }: RouteProps) => {
  let isAuthenticated = localStorage.getItem('token')
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  } 

  return <Route component={Component} path={path} />;
};

export default PrivateRouter;
