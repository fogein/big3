import React from 'react'
import cls from './sign_in-but.module.css'


export const SignInbut = (props:any) => {
  return (
          <button disabled={props.disabled} className={cls.Sign_In_but}>
            <span   className="">{props.label}</span>
          </button>
        
  )
}
