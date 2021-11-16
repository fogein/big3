import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FormLogin} from '../../../components/auth/login/loginForm';
import { IRootState } from '../../../core/redux/reducers/state';
import { ILogin } from '../../../types';
import { AuthActions } from '../../../core/redux/actions';
import cls from'./styles.module.scss';



export default function LoginContainer(props: any) {

    const useselect = useSelector((state: IRootState) => ({
    }))
    const dispatch = useDispatch();
    const signIn = useCallback((payload: ILogin) => dispatch(AuthActions.signIn(payload)),[dispatch]);
    
    return (
        <div className={cls.loginFormContainer}>
            <FormLogin handleSubmit={signIn} handleError={console.error} />
        </div>
    )
}

