import React from 'react'
import { Link } from 'react-router-dom'
import outImg  from '../../assets/images/signout.svg'
import cls from './Navbar.module.scss'

interface INavbarProps{
  playersImage?: string | undefined
  teamImage?: string | undefined
  
}

export const Navbar = (props:INavbarProps) => {
  

  return (
    
      <nav className={cls.nav}>
        <ul className={cls.navItems}>
        <Link to="/teams" className={cls.item1}>
            <img src={props.teamImage} alt="" />
            <label className={cls.navItemText}>Teams</label>
          </Link>
          <Link to="/players" className={cls.item2}>
            <img src={props.playersImage} alt="" />
            <label className={cls.navItemText}>Players</label>
          </Link>
          <li className={cls.item3}>
            <button onClick={()=>{localStorage.removeItem('token');window.location.reload()}} className={cls.exitBut}>
              <img src={outImg} alt="" />
              <label className={cls.navItemText}>Sign out</label>
            </button>
          </li>
        </ul>
      </nav>
  )
}