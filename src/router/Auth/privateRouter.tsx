import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { IRootState } from '../../modules/reducers/state';
const PrivateRouter = ({ component: Component, path }: RouteProps) => {
  const auth = useSelector((state: IRootState) => state.auth)
  if (!auth) {
    return <Redirect to="/login" />;
  } 

  return <Route component={Component} path={path} />;
};

export default PrivateRouter;
