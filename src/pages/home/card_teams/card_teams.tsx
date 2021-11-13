
import React, {  } from 'react'
import { AddButton } from '../../../components/UI/buttons/Add_button/Add_button'
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
            <AddButton/>
          </div>
          <div className={cls.mainContainer}>
            <TeamSmallCard/>
          </div>
        </div>
      </div>
  )
}
