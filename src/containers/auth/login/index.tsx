import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../../components/auth/login/loginForm';
import { IRootState } from '../../../core/redux/reducers/state';
import { ILogin } from '../../../types';
import { AuthActions } from '../../../core/redux/actions';


let classes = require('./styles.module.scss');
let cls:any = classes



export function LoginContainer(props: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const useselect = useSelector((state: IRootState) => ({
    }))
    const dispatch = useDispatch();
    const signIn = useCallback((payload: ILogin) => dispatch(AuthActions.signIn(payload)),[dispatch]);
    return (
        <div className={cls.loginFormContainer}>
            <LoginForm handleSubmit={signIn} handleError={console.error} />
        </div>
    )
}

