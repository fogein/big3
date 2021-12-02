import React from 'react'
import cls from './burgerMenu.module.scss'
import teamsImg  from '../../assets/images/group_person.svg'
import playersImg  from '../../assets/images/person.svg'
import outImg  from '../../assets/images/signout.svg'
import userImg from'../../assets/images/profile.svg';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

export const BurgerMenuSidebar = (props:any) => {
  return (
    <div className={cls.containerBurgerMenu}>
      <Menu {...props}>
      <div className={cls.userContainer}>
            <a href="/" className={cls.linkUser}>
            <span className={cls.userName}>John Smith</span>
            <img src={userImg} alt="" className={cls.userProfile} />
            </a>
          </div>
      <Link to="/teams" className={cls.item1}>
            <img src={teamsImg} alt="" />
            <label className={cls.navItemText}>Teams</label>
          </Link>
          <Link to="/players" className={cls.item2}>
            <img src={playersImg} alt="" />
            <label className={cls.navItemText}>Players</label>
          </Link>
         
            <button onClick={()=>{localStorage.removeItem('token');window.location.reload()}} className={cls.exitBut}>
              <img src={outImg} alt="" />
              <label className={cls.navItemText}>Sign out</label>
            </button>
          
  </Menu>
    </div>
  )
}
