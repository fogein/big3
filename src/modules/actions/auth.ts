import axios from 'axios';




export function Auth(data:any) {
    localStorage.setItem('token',data.data.token)

    
    return {
        type:"AUTH",
        data
    }
  }

  export function AuthSignIn(data:any) {
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

export function SignUp(data:any) {
  localStorage.setItem('status',data.status)

    
    return {
        type:"SIGN_UP",
        data
    }
  }

    export function AuthSignUp(data:any) {

      let userName = data.UserName
      let login = data.Login
      let password= data.password
    return (dispatch:any) => {
        axios
        .post('http://dev.trainee.dex-it.ru/api/Auth/SignUp', {
          login,
          password,
          userName
        })
        .then(response => response)
        .then(data => dispatch(SignUp(data)))
    }
  }
