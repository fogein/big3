import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SignUpForm from '../../../components/auth/signup/signUpForm';
import {ISignUp} from "../../../types";
import {AuthActions} from "../../../core/redux/actions";




let classes = require('./styles.module.scss');
let cls:any = classes


export function SignUpContainer(props: any) {
    const dispatch = useDispatch();
    const signUp = useCallback((payload: ISignUp) => dispatch(AuthActions.signUp(payload)),[dispatch]);
    return (
        <div className={cls.signupFormContainer}>
            <SignUpForm handleSubmit={signUp} handleError={console.error} />
        </div>
    )
}


