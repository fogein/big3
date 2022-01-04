import React from 'react'
import myLogo  from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import cls from  './header.module.scss'
import { HeaderUserContainer } from '../headerUserContainer/headerUserContainer';


export const Header: React.FC = () => {
  return (
    
      <header>
        <div className={cls.headerContainer}>
          <Link to='/teams' className={cls.logo}>
            <img src={myLogo} alt="logo" />
          </Link>
          <div className={cls.userContainer}>

           <HeaderUserContainer/>
            
          </div>
        </div>
      </header> 


  )
}
