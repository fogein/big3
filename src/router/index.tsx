import React, { Suspense, Fragment } from 'react';

import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import { history } from '../core/redux/store';
import {Fallback} from '../components/common/fallback';
import { IRootState } from '../core/redux/reducers/state';
import { IAuth } from '../types/auth';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';




const CardTeams = React.lazy(() => import('../pages/home/card_teams/card_teams'));
const LoginContainer = React.lazy(() => import('../containers/auth/login/LoginContainer'));
const SignUpContainer = React.lazy(() => import('../containers/auth/signup/SignUpContainer'));
const SignUpSuccess = React.lazy(() => import('../pages/auth/signUpSuccess'));
const Card_players = React.lazy(() => import('../pages/home/card_players/card_players'));


interface IMainRouterProps extends RouteProps {
    auth?: IAuth,
}
export function MainRouter(props: IMainRouterProps) {
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
                                <Route exact path="/players" component={Card_players} />
                            </>
                        )
                }
            </Switch>
        </Suspense>
    </Router>
);
}
