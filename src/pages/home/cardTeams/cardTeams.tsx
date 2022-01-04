import React, { useEffect, useState } from 'react'
import { AddButton } from '../../../UI/buttons/addButton/addButton'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'
import { TeamSmallCard } from '../../../UI/teamSmallCard/teamSmallCard'
import {  MAIN_URL } from '../../../modules/teamList/teamsAndPlayersConstants'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import cls from './cardTeam.module.scss'
import { teamSeacrh, teamsFetchData } from '../../../modules/teamList/teamsSlicer'
import { useDispatch, useSelector } from 'react-redux'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { Pagination} from '@mui/material'
import PaginationItem from '@mui/material/PaginationItem';
import { Search } from '../../../UI/search/Search'


 export const CardTeams: React.FC = () => {
 
const [page,setPage]=useState(1)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(teamsFetchData(`${MAIN_URL}/api/Team/GetTeams?PageSize=${6}&Page=${page}`));
 }, [dispatch,page]);
 const teams  = useSelector<any, any>(state => state.teams )
const{error}:any = useSelector<any, any>(state => state.teams )
 
 const [pagesQty,setPageQty]=useState(0)

 
useEffect(()=>{
  setPageQty(Math.ceil(teams.teams.count/teams.teams.size))
},[teams,error])

if(error)
{localStorage.clear()
  window.location.reload()}

  return (

      <div className={cls.bg}>
        <Header/>
        <BurgerMenuSidebar pageWrapId={"page-wrap"}/>
        <Navbar/>
        
        <div  className={cls.container}>
        
          <div className={cls.upContainer}>
            <Search
            page={teamSeacrh}
            />
            <AddButton
            link='/teams/addTeam'
            />
          </div>
          <div className={cls.mainContainer} >
              <div >
              <ul className={cls.smallCardContainer}>



              {teams.teams.data?.map(({name,foundationYear,imageUrl,id}:ITeamData) =>
                <TeamSmallCard 
                key={id}
                name={name}
                foundationYear={foundationYear}
                imageUrl={imageUrl}
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

