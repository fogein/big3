import React from 'react'
import userImg from'../../../assets/images/profile.svg';
import myLogo  from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
// import burgerMenu from '../../../assets/images/burger.svg'
let classes = require( './header.module.scss')

let cls:any = classes

export const Header: React.FC = () => {
  return (
    
      <header>
        <div className={cls.headerContainer}>
          <Link to='/' className={cls.logo}>
            <img src={myLogo} alt="logo" />
          </Link>
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
