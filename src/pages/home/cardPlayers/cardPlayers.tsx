import React from 'react'
import { AddButton } from '../../../UI/buttons/Add_button/Add_button'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'
import { PlayerSmallCard } from '../../../UI/PlayerSmallCard/PlayerSmallCard'
import { Search } from '../../../UI/Search/Search'
import cls from './cardPlayers.module.scss'



export const CardPlayers: React.FC = () => {
  return (
    <>
      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <div className={cls.card_playersContainer}> 
          <div className={cls.upContainerPlayers}>
            <Search/>
            <AddButton/>
          </div>
          <div className={cls.mainContainerPlayers}>
            <PlayerSmallCard/>
           
            
            
          </div>
        </div>
      </div>
    </>
  )
}

