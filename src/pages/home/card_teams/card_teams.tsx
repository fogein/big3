/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Add_button } from '../../../components/UI/buttons/Add_button/Add_button'
import { Header } from '../../../components/UI/header/Header'
import { Navbar } from '../../../components/UI/Navbar/Navbar'
import { Search } from '../../../components/UI/Search/Search'
import { TeamSmallCard } from '../../../components/UI/TeamSmallCard/TeamSmallCard'
import './card_team.scss'



export const Card_teams: React.FC = () => {
  return (

      <div className="bg">
        <Header/>
        <Navbar/>
        <div className="card_teams-container">
          <div className="upContainer">
            <Search/>
            <Add_button/>
          </div>
          <div className="mainContainer">
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
