import React, { useCallback } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {FormSignUp} from '../../../components/auth/signup/signUpForm';
import { IRootState } from '../../../modules/reducers/state';
import { ISignUp } from '../../../api/dto/auth';
import {AuthSignUp} from "../../../modules/actions/auth";
import cls from'./styles.module.scss';


export const SignUpContainer = (props: any) => {
    const dispatch = useDispatch();
    const signUp = useCallback((payload: ISignUp) => dispatch(AuthSignUp(payload)),[dispatch]);
    const user = useSelector((state: IRootState) => state.user)
    let status = localStorage.getItem('status')
    if (status === '200')
   { 
      alert('Успешно')
}

    return (
        <div className={cls.signupFormContainer}>
            <FormSignUp handleSubmit={signUp} handleError={console.error} />
        </div>
    )
}


