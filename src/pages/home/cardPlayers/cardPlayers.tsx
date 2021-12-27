import React, { useEffect, useState } from 'react'
import { AddButton } from '../../../UI/buttons/addButton/addButton'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'
import {  MAIN_URL } from '../../../modules/teamList/teamsAndPlayersConstants'
import { IPlayerData } from '../../../api/dto/teamsAndPlayers'
import cls from './cardPlayers.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { Pagination} from '@mui/material'
import PaginationItem from '@mui/material/PaginationItem';
import { Search } from '../../../UI/search/Search'
import { PlayerSmallCard } from '../../../UI/playerSmallCard/playerSmallCard'
import { playersFetchData } from '../../../modules/playersList/playersSlicer'



 export const CardPlayers: React.FC = () => {
 
const [page,setPage]=useState(1)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(playersFetchData(`${MAIN_URL}/api/Player/GetPlayers?PageSize=${6}&Page=${page}`));
 }, [dispatch,page]);
 const players  = useSelector<any, any>(state => state.players )
const{error}:any = useSelector<any, any>(state => state.players )
 
 const [pagesQty,setPageQty]=useState(0)

 
useEffect(()=>{
  setPageQty(Math.ceil(players.players.count/players.players.size))
},[players,error])

// if(error)
// {localStorage.clear()
//   window.location.reload()}





  return (

      <div className={cls.bg}>
        <Header/>
        <BurgerMenuSidebar pageWrapId={"page-wrap"}/>
        <Navbar/>
        
        <div  className={cls.container}>
        
          <div className={cls.upContainer}>
            <Search
            page={page}
            />
            <AddButton
            link='/players/addPlayer'
            />
          </div>
          <div className={cls.mainContainer} >
              <div >
              <ul className={cls.smallCardContainer}>



              {players.players.data?.map(({team,name,number,avatarUrl,id}:IPlayerData) =>
                
                <PlayerSmallCard 
                key={id}
                name={name}
                number={number}
                avatarUrl={avatarUrl}
                team={team}
                id={id} 
                />
                
              )}




              
              </ul>
              </div>
          </div>
          <div className={cls.paginationContainer}>
          <Pagination
          count={pagesQty}
          page={page}
          color='primary'
          onChange={(_,num:number)=> setPage(num)}
          renderItem={(item) => (
            <PaginationItem
            
              {...item}
            />
          )}
          />
          </div>
        </div>
      </div>
  )
}

