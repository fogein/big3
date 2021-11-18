import React, { useEffect, useState } from 'react'
import { IPlayerData } from '../../../api/dto/teamsAndPlayers'
import { getApiResource } from '../../../api/request/teamAndPlayersApi'
import { GET_PLAYER_URL } from '../../../modules/constants/TeamsAndPlayers'
import { AddButton } from '../../../UI/buttons/Add_button/Add_buttonPlayers'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'
import { Pagination } from '../../../UI/Pagination/Pagination'
import { PlayerSmallCard } from '../../../UI/PlayerSmallCard/PlayerSmallCard'
import { Search } from '../../../UI/Search/Search'
import cls from './cardPlayers.module.scss'



export const CardPlayers: React.FC = () => {
 
    const [player,setPlayer] = useState([]);
    const [currentPage,setCurrentPage] = useState(1)
    const [playerPerPage] = useState(6)
  
    const getResource = async (url:any) => {
      const res = await getApiResource(url);
  
  
      const playerList = res.data.map(({name,position,birthday,height,weight,avatarUrl,team,number,id}:IPlayerData) => { 
        return {
          name,
          team,
          number,
          avatarUrl,
          id
  
        }
      })
      console.log(playerList)
  
      setPlayer(playerList)
    }
    
  
    useEffect(() => {
      getResource(GET_PLAYER_URL)
    }, [])
    
  
  
  // Search
    const [value, setValue]=useState("");
    const filteredPlayers = player.filter((e:any) => e.name.toLowerCase().includes(value.toLowerCase()))
   
  
  // Search
  
  // Pagination
  
  const lastPlayerIndex = currentPage*playerPerPage
  const firstPlayerIndex = lastPlayerIndex-playerPerPage
  const currentPlayers = filteredPlayers.slice(firstPlayerIndex, lastPlayerIndex)
  
  const paginate = (pageNumber:any) => setCurrentPage(pageNumber)
  
  
  // Pagination
  
  
    return (
  
        <div className={cls.bg}>
          <Header/>
          <Navbar/>
          <div>
            <div className={cls.upContainer}>
              <Search
              state={setValue}
              />
              <AddButton
              filteredPlayers={filteredPlayers}
              setPlayer={setPlayer}
              />
            </div>
            <div className={cls.mainContainer}>
            <ul className={cls.smallCardContainer}>
            {currentPlayers.map(({name,number,team,avatarUrl,id}) =>
              <PlayerSmallCard 
              name={name}
              team={team}
              number={number}
              avatarUrl={avatarUrl}
              id={id}
              />
            )}
            </ul>
            </div>
           <div className={cls.paginationContainer}> <Pagination
            curretPage={currentPlayers}
            PerPage={playerPerPage}
            totalPages={filteredPlayers.length}
            paginate={paginate}
            /></div>
          </div>
          
        </div>
    )
  }
  
