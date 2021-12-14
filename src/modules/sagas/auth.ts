import { put, call, takeLatest, } from 'redux-saga/effects';
import { message } from 'antd';
import { AuthActions } from '../actions/auth';
import {UserActions} from '../actions/user';
import { Action } from 'redux-actions';
import { ISignUp,ILogin, IAuth } from '../../api/dto/auth';
import { IUser } from '../../api/dto/user';
import { signIn,signUp } from '../../api/request/auth'; 
import * as _ from 'lodash';
import { useHistory } from 'react-router-dom';





// function* SignInWorker(action: Action<ILogin>) {
//     try {
//         const { data } = yield call(signIn, action.payload);
//         const token = data.token;
//         localStorage.setItem('token', token);

       
        
//         yield put(AuthActions.setAuthInfo(_.pick(data, ['accessToken']) as IAuth));
//         yield put(UserActions.setUser(_.omit(data, 'accessToken') as IUser));
        
       
//     } catch (error) {
//         message.error('Failed to login!');
//         console.error(error);
//     }
// }

function* SignUpWorker(action: Action<ISignUp>) {
    try {
        const history = useHistory()
        const { data } = yield call(signUp, action.payload);

        history.push("/signup/success");
    } catch (error) {
        message.error('Failed to sign up!');
        console.error(error);
    }
}

export default function* watchAuth() {
    // yield takeLatest(AuthActions.Type.SIGN_IN, SignInWorker);
    // yield takeLatest(AuthActions.Type.SIGN_UP, SignUpWorker);
}
