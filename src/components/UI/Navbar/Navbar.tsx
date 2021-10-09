import React from 'react'
let teamsImg = require ('../../../assets/images/group_person.svg')
let playersImg = require ('../../../assets/images/person.svg')
let outImg = require ('../../../assets/images/signout.svg')
let classes = require ('./Navbar.module.scss')

let cls:any = classes
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