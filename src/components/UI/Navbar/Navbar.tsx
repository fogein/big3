import React from 'react'
import teamsImg  from '../../../assets/images/group_person.svg'
import playersImg  from '../../../assets/images/person.svg'
import outImg  from '../../../assets/images/signout.svg'
import cls from './Navbar.module.scss'

export const Navbar: React.FC = () => {
  return (
    
      <nav className={cls.nav}>
        <ul className={cls.navItems}>
          <li className={cls.item1}>
            <img src={teamsImg} alt="" />
            <label className={cls.navItemText}>Teams</label>
          </li>
          <li className={cls.item2}>
            <img src={playersImg} alt="" />
            <label className={cls.navItemText}>Players</label>
          </li>
          <li className={cls.item3}>
            <img src={outImg} alt="" />
            <label className={cls.navItemText}>Sign out</label>
          </li>
        </ul>
      </nav>
  )
}