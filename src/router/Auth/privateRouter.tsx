import { Redirect, Route, RouteProps } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, path }: RouteProps) => {
  let isAuthenticated = localStorage.getItem('token')
  let isError = localStorage.getItem('401')

  const  clear  = async () => {
  localStorage.clear();
  window.location.reload();
  }
  if ( !isAuthenticated ) {
    return <Redirect to="/" />;
  } else if(isError){
    clear()  
  }

  return <Route component={Component} path={path} />;
};

