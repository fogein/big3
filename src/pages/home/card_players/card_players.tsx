/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Add_button } from '../../../components/UI/buttons/Add_button/Add_button'
import { Header } from '../../../components/UI/header/Header'
import { Navbar } from '../../../components/UI/Navbar/Navbar'
import { PlayerSmallCard } from '../../../components/UI/PlayerSmallCard/PlayerSmallCard'
import { Search } from '../../../components/UI/Search/Search'
import classes from './card_players.module.scss'

let cls:any = classes

export const Card_players: React.FC = () => {
  return (
    <>
      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <div className={cls.card_playersContainer}>
          <div className={cls.upContainerPlayers}>
            <Search/>
            <Add_button/>
          </div>
          <div className={cls.mainContainerPlayers}>
            <PlayerSmallCard/>
            <PlayerSmallCard/>
            <PlayerSmallCard/>
            <PlayerSmallCard/>
            <PlayerSmallCard/>
            <PlayerSmallCard/>
            
            
          </div>
        </div>
      </div>
    </>
  )
}
