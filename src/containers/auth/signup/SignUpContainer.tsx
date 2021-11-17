import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {FormSignUp} from '../../../components/auth/signup/signUpForm';
import { ISignUp } from '../../../api/dto';
import {AuthActions} from "../../../modules/actions";
import cls from'./styles.module.scss';


export default function SignUpContainer(props: any) {
    const dispatch = useDispatch();
    const signUp = useCallback((payload: ISignUp) => dispatch(AuthActions.signUp(payload)),[dispatch]);
    return (
        <div className={cls.signupFormContainer}>
            <FormSignUp handleSubmit={signUp} handleError={console.error} />
        </div>
    )
}


