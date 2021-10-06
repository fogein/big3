import React from 'react'
import teamsImg from '../../../assets/images/group_person.svg'
import playersImg from '../../../assets/images/person.svg'
import outImg from '../../../assets/images/signout.svg'
import './Navbar.scss'

export const Navbar: React.FC = () => {
  return (
    
      <nav className='nav'>
        <ul className='nav__items'>
          <li className='nav__item item1'>
            <img src={teamsImg} alt="" />
            <label className='nav__item-text'>Teams</label>
          </li>
          <li className='nav__item item2'>
            <img src={playersImg} alt="" />
            <label className='nav__item-text'>Players</label>
          </li>
          <li className='nav__item item3'>
            <img src={outImg} alt="" />
            <label className='nav__item-text'>Sign out</label>
          </li>
        </ul>
      </nav>
  )
}