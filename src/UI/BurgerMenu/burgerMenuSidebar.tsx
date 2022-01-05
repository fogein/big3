import React, { useEffect } from 'react'
import cls from './burgerMenu.module.scss'
import teamsImg  from '../../assets/images/group_person.svg'
import playersImg  from '../../assets/images/person.svg'
import outImg  from '../../assets/images/signout.svg'
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config/env/development'

export const BurgerMenuSidebar = (props:any) => {

  const  [profileImage,setProfileImage]=React.useState<string | any>(`${BASE_URL}/images/4mniosha.jpg`)
  const  [name,setName]=React.useState<string | any>('')


  useEffect(() => {

    setName(localStorage.getItem('name'))
    setProfileImage(localStorage.getItem('avatarUrl'))
      
     }, [])

  return (
    <div className={cls.containerBurgerMenu}>
      <Menu {...props}>
      <div className={cls.userContainer}>
          <button  className={cls.linkUser}>
          <span className={cls.userName}>{name}</span>
          <img src={profileImage} alt="Добавьте аватар" className={cls.userProfile} />
          </button>
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
