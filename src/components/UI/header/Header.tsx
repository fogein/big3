import React from 'react'
import { Logo } from '../Logo'
let userImg =require('../../../assets/images/profile.svg')
// import burgerMenu from '../../../assets/images/burger.svg'
let classes = require( './header.module.scss')

let cls:any = classes

export const Header: React.FC = () => {
  return (
    
      <header>
        <div className={cls.headerContainer}>
          <Logo/>
          <div className={cls.userContainer}>
            <a href="/" className={cls.linkUser}>
            <span className={cls.userName}>John Smith</span>
            <img src={userImg} alt="" className={cls.userProfile} />
            </a>
          </div>
        </div>

        {/* burger */}

        {/* <button className="burger">
          <img src={burgerMenu} alt="menu" />
        </button> */}


        {/* burger end */}

      </header> 


  )
}
