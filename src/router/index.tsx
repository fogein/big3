import React, { Suspense } from 'react';
import {  useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, RouteProps } from 'react-router-dom';
import {Fallback} from '../components/common/fallback';
import { IRootState } from '../core/redux/reducers/state';
import { IAuth } from '../types/auth';
import 'antd/dist/antd.css';
import { Card_teams } from '../pages/home/card_teams/card_teams';
import { LoginPage } from '../pages/auth/login';
import { SignUpPage } from '../pages/auth/signup';
import { SignUpSuccess } from '../pages/auth/signUpSuccess';



interface IMainRouterProps extends RouteProps {
    auth?: IAuth,
}
// (state: IRootState): IMainRouterProps
export function MainRouter(props: IMainRouterProps) {
    const auth = useSelector((state: IRootState) => state.auth )
    return (
        <Router >
            <Suspense fallback={<Fallback />}>
                <Switch>
                    {
                        auth 
                            ?
                            (
                                <Route exact path="/" component={Card_teams} />
                            )
                            : (
                                <>
                                    <Route exact path="/" component={LoginPage} />
                                    <Route exact path="/signup" component={SignUpPage} />
                                    <Route exact path="/signup/success" component={SignUpSuccess} />
                                </>
                            )
                    }
                </Switch>
            </Suspense>
        </Router>
    );
}