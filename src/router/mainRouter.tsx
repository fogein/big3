import React, { Suspense, Fragment } from 'react';

import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import { history } from '../core/redux/store';
import {Fallback} from '../components/common/fallback';
import { IRootState } from '../modules/reducers/state';
import { IAuth } from '../api/dto/auth';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { CardTeams } from '../pages/home/cardTeams/cardTeams';
import { CardPlayers } from '../pages/home/cardPlayers/cardPlayers';
import { SignUpContainer } from '../containers/auth/signup/SignUpContainer';
import { SignUpSuccess } from '../pages/auth/signUpSuccess';
import { LoginContainer } from '../containers/auth/login/LoginContainer';



// const CardTeams = React.lazy(() => import('../pages/home/cardTeams/cardTeams'));
// const LoginContainer = React.lazy(() => import('../containers/auth/login/LoginContainer'));
// const SignUpContainer = React.lazy(() => import('../containers/auth/signup/SignUpContainer'));
// const SignUpSuccess = React.lazy(() => import('../pages/auth/signUpSuccess'));
// const Card_players = React.lazy(() => import('../pages/home/cardPlayers/cardPlayers'));


interface IMainRouterProps extends RouteProps {
    auth?: IAuth,
}
export const  MainRouter = (props: IMainRouterProps) => {
    const auth:IAuth = useSelector((state: IRootState) => state.auth )
    return (
        <Router history={history}>
        <Suspense fallback={<Fallback />}>
            <Switch>
                {
                        auth
                        ? (
                            <Route exact path="/" component={CardTeams} />
                        )
                        : (
                            <>
                                <Route exact path="/" component={LoginContainer} />
                                <Route exact path="/signup" component={SignUpContainer} />
                                <Route exact path="/signup/success" component={SignUpSuccess} />
                                <Route exact path="/players" component={CardPlayers} />
                            </>
                        )
                }
            </Switch>
        </Suspense>
    </Router>
);
}
