import React, { Suspense, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Router, Route, Switch, RouteProps } from 'react-router-dom';
import { history } from '../core/redux/store';
import {Fallback} from '../components/common/fallback';
import { IRootState } from '../core/redux/reducers/state';
import { IAuth } from '../types/auth';
import 'antd/dist/antd.css';
import { Card_teams } from '../pages/home/card_teams/card_teams';
import { LoginPage } from '../pages/auth/login';
import { SignUpPage } from '../pages/auth/signup';
import { SignUpSuccess } from '../pages/auth/signUpSuccess';



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
                                    <Route exact path="/signup/success" component={SignUpSuccess} />
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


