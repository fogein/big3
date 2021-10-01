/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Add_button } from '../../../components/UI/buttons/Add_button/Add_button'
import { Header } from '../../../components/UI/header/Header'
import { Navbar } from '../../../components/UI/Navbar/Navbar'
import { PlayerSmallCard } from '../../../components/UI/PlayerSmallCard/PlayerSmallCard'
import { Search } from '../../../components/UI/Search/Search'




export const Card_players: React.FC = () => {
  return (
    <>
      <div className="bg">
        <Header/>
        <Navbar/>
        <div className="card_players-container">
          <div className="upContainer-players">
            <Search/>
            <Add_button/>
          </div>
          <div className="mainContainer-players">
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
