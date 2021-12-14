import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {FormSignUp} from '../../../components/auth/signup/signUpForm';
import { ISignUp } from '../../../api/dto/auth';
import {AuthActions} from "../../../modules/actions/auth";
import cls from'./styles.module.scss';


export const SignUpContainer = (props: any) => {
    const dispatch = useDispatch();
    const signUp = useCallback((payload: ISignUp) => dispatch(AuthActions(payload)),[dispatch]);
    return (
        <div className={cls.signupFormContainer}>
            <FormSignUp handleSubmit={signUp} handleError={console.error} />
        </div>
    )
}


