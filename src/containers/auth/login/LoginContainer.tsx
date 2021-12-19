import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FormLogin} from '../../../components/auth/login/loginForm';
import { IRootState } from '../../../modules/rootReducer/state'; 
import { ILogin } from '../../../api/dto/auth'; 
import { AuthSignIn } from '../../../modules/auth/authSlicer';
import cls from'./styles.module.scss';
import {  useHistory } from 'react-router-dom';



export const LoginContainer = (props: any) => {
    const history = useHistory()
    let isAuthenticated = localStorage.getItem('token')
    const {error}:any = useSelector((state: IRootState) => state.auth)
    const dispatch = useDispatch();
    const signIn = useCallback((payload: ILogin) => dispatch(AuthSignIn(payload)),[dispatch]);
console.log(error);

    if(error)
    window.location.reload()
    if(isAuthenticated)
    history.push('/teams')

    return (
        <div className={cls.loginFormContainer}>
            {error && alert(`${error}`)}
            <FormLogin handleSubmit={signIn} handleError={console.error} />
        </div>
    )
}

