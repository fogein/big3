import axios from 'axios';
import {ILogin, IAuth, ISignUp} from '../../../types';
import { ContentTypes } from '.';
import {signInURL, signUpURL} from '../../constants/auth';

export function signIn (data: ILogin){
    return axios({
        url: "http://dev.trainee.dex-it.ru/api/Auth/SignIn",
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON, 
        },
        data,
    });
}

export function signUp (data: ISignUp) {
    return axios({
        url: "http://dev.trainee.dex-it.ru/api/Auth/SignUp",
        
        method: 'POST',
        headers: {
            
            'Content-Type': ContentTypes.APPLICATION_JSON,
        },
        data,
    });
}