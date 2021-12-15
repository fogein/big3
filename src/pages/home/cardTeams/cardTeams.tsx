/* eslint-disable @typescript-eslint/no-array-constructor */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { AddButton } from '../../../UI/buttons/addButton/addButton'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'
import { Pagination } from '../../../UI/pagination/pagination'
import { Search } from '../../../UI/search/search'
import { TeamSmallCard } from '../../../UI/teamSmallCard/teamSmallCard'
import { GET_TEAM_URL, MAIN_URL } from '../../../modules/teamList/teamsAndPlayersConstants'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import cls from './cardTeam.module.scss'
import { teamsFetchData } from '../../../modules/teamList/teamsAction'
import { useDispatch, useSelector } from 'react-redux'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'



 export const CardTeams: React.FC = () => {
 


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(teamsFetchData(`${MAIN_URL}/api/Team/GetTeams?PageSize=${25}&Page=${1}`));
 }, [dispatch]);
 const teams  = useSelector<any, Array<ITeamData>>(state => state.teams )

 




  return (

      <div className={cls.bg}>
        <Header/>
        <BurgerMenuSidebar pageWrapId={"page-wrap"}/>
        <Navbar/>
        
        <div  className={cls.container}>
        
          <div className={cls.upContainer}>
            <Search
            PageSize={teams.length}
            />
            <AddButton/>
          </div>
          <div className={cls.mainContainer} >
              <div >
              <ul className={cls.smallCardContainer}>



              {teams.map(({name,foundationYear,imageUrl,id}) =>
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
          {/* <Pagination
          curretPage={currentTeam}
          PerPage={teamPerPage}
          totalPages={teams.length}
          paginate={paginate}
          /> */}
        </div>
      </div>
  )
}

