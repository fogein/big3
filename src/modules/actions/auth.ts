import axios from 'axios';
import { createAction } from 'redux-actions';
import { IAuth, ILogin, ISignUp } from '../../api/dto/auth';

enum Type {
    SIGN_IN = 'SIGN_IN',
    SET_AUTH = 'SET_AUTH',
    SIGN_UP = 'SIGN_UP',
}

const setAuthInfo = createAction<IAuth>(Type.SET_AUTH);
const signIn = createAction<ILogin>(Type.SIGN_IN);
const signUp = createAction<ISignUp>(Type.SIGN_UP);



// export const AuthActions = {
//     Type,
    
//     setAuthInfo,
//     signIn,
//     signUp,
// }

export function Auth(data:any) {
    localStorage.setItem('token',data.data.token)

    
    return {
        type:"AUTH",
        data
    }
  }

  export function AuthActions(data:any) {
      let login = data.Login
      let password= data.password
    return (dispatch:any) => {
        axios
        .post('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
          login,
          password
        })
        .then(response => response)
        .then(data => dispatch(Auth(data)))
       
        
    }
  }
