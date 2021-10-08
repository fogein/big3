/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Add_button } from '../../../components/UI/buttons/Add_button/Add_button'
import { Header } from '../../../components/UI/header/Header'
import { Navbar } from '../../../components/UI/Navbar/Navbar'
import { Search } from '../../../components/UI/Search/Search'
import { TeamSmallCard } from '../../../components/UI/TeamSmallCard/TeamSmallCard'
import classes from './card_team.module.scss'

let cls:any = classes

export const Card_teams: React.FC = () => {
  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <div>
          <div className={cls.upContainer}>
            <Search/>
            <Add_button/>
          </div>
          <div className={cls.mainContainer}>
            <TeamSmallCard />
            <TeamSmallCard/>
            <TeamSmallCard/>
            <TeamSmallCard/>
            <TeamSmallCard/>
            <TeamSmallCard/>
          </div>
        </div>
      </div>
  )
}
