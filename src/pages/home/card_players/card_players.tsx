import React from 'react'
import { AddButton } from '../../../components/UI/buttons/Add_button/Add_button'
import { Header } from '../../../components/UI/header/Header'
import { Navbar } from '../../../components/UI/Navbar/Navbar'
import { PlayerSmallCard } from '../../../components/UI/PlayerSmallCard/PlayerSmallCard'
import { Search } from '../../../components/UI/Search/Search'
import cls from './card_players.module.scss'



 const Card_players: React.FC = () => {
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
export default Card_players
