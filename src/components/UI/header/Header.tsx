import React from 'react'
import userImg from'../../../assets/images/profile.svg';
import myLogo  from '../../../assets/images/logo.svg'
// import burgerMenu from '../../../assets/images/burger.svg'
let classes = require( './header.module.scss')

let cls:any = classes

export const Header: React.FC = () => {
  return (
    
      <header>
        <div className={cls.headerContainer}>
          <a href="/" className={cls.logo}>
            <img src={myLogo} alt="logo" />
          </a>
          <div className={cls.userContainer}>
            <a href="/" className={cls.linkUser}>
            <span className={cls.userName}>John Smith</span>
            <img src={userImg} alt="" className={cls.userProfile} />
            </a>
          </div>
        </div>
      </header> 


  )
}
