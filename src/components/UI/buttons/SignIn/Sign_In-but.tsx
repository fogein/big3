import React from 'react'
let classes = require( './sign_in-but.module.css')

const cls = [classes.Sign_In_but]

export const Sign_In_but = (props:any) => {
  return (
          <button disabled={props.disabled} className={cls.join(' ')}>
            <span   className="">{props.label}</span>
          </button>
        
  )
}
