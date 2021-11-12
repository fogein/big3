import { put, call, takeLatest, } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { message } from 'antd';
import { AuthActions, UserActions } from '../actions';
import { Action } from 'redux-actions';
import { ILogin, IAuth, IUser, ISignUp } from '../../../types';
import { signIn, signUp } from './api';
import * as _ from 'lodash';
import { signUpSuccessRoute } from "../constants/auth";



export const savedToken = localStorage.getItem('token');


function* SignInWorker(action: Action<ILogin>) {
    try {
        const { data } = yield call(signIn, action.payload);
        const token = data.token;
        localStorage.setItem('token', token);

        yield put(AuthActions.setAuthInfo(_.pick(data, ['accessToken']) as IAuth));
        yield put(UserActions.setUser(_.omit(data, 'accessToken') as IUser));
        
       
    } catch (error) {
        message.error('Failed to login!');
        console.error(error);
    }
}

function* SignUpWorker(action: Action<ISignUp>) {
    try {
        const { data } = yield call(signUp, action.payload);

        yield put(push(signUpSuccessRoute));
    } catch (error) {
        message.error('Failed to sign up!');
        console.error(error);
    }
}

export default function* watchAuth() {
    yield takeLatest(AuthActions.Type.SIGN_IN, SignInWorker);
    yield takeLatest(AuthActions.Type.SIGN_UP, SignUpWorker);
}


// function saveToken(token:string) {
//     sessionStorage.setItem('tokenData', JSON.stringify(token));
// }

// function getTokenData({email, password}:ILogin) {
//     let token
//     console.log(token);
//     return fetch('api/auth', {
//         method: 'POST',
//         credentials: 'include',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email,
//             password,
//         }),
//     })
//         .then((res) => {
//             if (res.status === 200) {
//                 const tokenData = res.json();
//                 saveToken(JSON.stringify(tokenData)); // сохраняем полученный токен в sessionStorage, с помощью функции, заданной ранее
//                 return Promise.resolve()
//             }
//             return  token = Promise.reject();
//         });
        
// }
// getTokenData()

