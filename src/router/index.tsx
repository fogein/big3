import React, { Suspense, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import { history } from '../core/redux/store';
import {Fallback} from '../components/common/fallback';
import { IRootState } from '../core/redux/reducers/state';
import { IAuth } from '../types/auth';
import 'antd/dist/antd.css';
import { Card_teams } from '../pages/home/card_teams/card_teams';

const LoginPage = React.lazy(() => import('../pages/auth/login'));
const SignUpPage = React.lazy(() => import('../pages/auth/signup'));
const SignUpSuccessPage = React.lazy(() => import('../pages/auth/signUpSuccess'));


interface IMainRouterProps extends RouteProps {
    auth: IAuth,
}

function MainRouter(props: IMainRouterProps) {
    return (
        <Router history={history}>
            <Suspense fallback={<Fallback />}>
                <Switch>
                    {
                        props.auth
                            ? (
                                <Route exact path="/" component={Card_teams} />
                            )
                            : (
                                <>
                                    <Route exact path="/" component={LoginPage} />
                                    <Route exact path="/signup" component={SignUpPage} />
                                    <Route exact path="/signup/success" component={SignUpSuccessPage} />
                                </>
                            )
                    }
                </Switch>
            </Suspense>
        </Router>
    );
}

const mapStateToProps = (state: IRootState): IMainRouterProps => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(MainRouter);


