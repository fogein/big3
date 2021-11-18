import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FormLogin} from '../../../components/auth/login/loginForm';
import { IRootState } from '../../../modules/reducers/state'; 
import { ILogin } from '../../../api/dto'; 
import { AuthActions } from '../../../modules/actions';
import cls from'./styles.module.scss';
import {  useHistory } from 'react-router-dom';



export const LoginContainer = (props: any) => {
    const history = useHistory()
    const auth = useSelector((state: IRootState) => state.auth)
    const dispatch = useDispatch();
    const signIn = useCallback((payload: ILogin) => dispatch(AuthActions.signIn(payload)),[dispatch]);

    if(auth)
    history.push('/team')

    return (
        <div className={cls.loginFormContainer}>
            <FormLogin handleSubmit={signIn} handleError={console.error} />
        </div>
    )
}

