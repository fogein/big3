import React from 'react'
let myLogo = require ('../../assets/images/logo.svg')
export const Logo: React.FC = () => {
  return (
    <>
      <a href="/" className="logo__link">
        <img src={myLogo} alt="logo" className="logo__image" />
      </a>
    </>
  )
}