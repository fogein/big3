import React, { useCallback } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {FormSignUp} from '../../../components/auth/signup/signUpForm';
import { IRootState } from '../../../modules/rootReducer/state';
import { ISignUp } from '../../../api/dto/auth';
import {AuthSignUp} from "../../../modules/auth/userSlicer";
import cls from'./styles.module.scss';


export const SignUpContainer = (props: any) => {
    const dispatch = useDispatch();
    const signUp = useCallback((payload: ISignUp) => dispatch(AuthSignUp(payload)),[dispatch]);
    const user = useSelector((state: IRootState) => state.user)
    let status = localStorage.getItem('status')
    console.log(user);
    
    if (status === '200')
   { 
      alert('Успешно')
      localStorage.clear()
} 

    return (
        <div className={cls.signupFormContainer}>
            <FormSignUp handleSubmit={signUp} handleError={console.error} />
        </div>
    )
}


