import React from 'react'
import cls from './sign_in-but.module.css'

interface IButton {
  htmlType:string,
  disabled?:any,
  label:string,
}
export const SignInbut = (props:IButton) => {
  return (
          <button disabled={props.disabled} className={cls.Sign_In_but}>
            <span   className="">{props.label}</span>
          </button>
        
  )
}
