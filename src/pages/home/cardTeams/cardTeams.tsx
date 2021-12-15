/* eslint-disable @typescript-eslint/no-array-constructor */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { AddButton } from '../../../UI/buttons/Add_button/Add_button'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'
import { Pagination } from '../../../UI/Pagination/Pagination'
import { Search } from '../../../UI/Search/Search'
import { TeamSmallCard } from '../../../UI/TeamSmallCard/TeamSmallCard'
import { GET_TEAM_URL } from '../../../modules/constants/TeamsAndPlayers'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import cls from './cardTeam.module.scss'
import { teamsFetchData } from '../../../modules/actions/teams'
import { useDispatch, useSelector } from 'react-redux'
import { BurgerMenuSidebar } from '../../../UI/BurgerMenu/burgerMenuSidebar'



 export const CardTeams: React.FC = () => {
 
  const [currentPage,setCurrentPage] = useState(1)
  const [teamPerPage] = useState(6)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(teamsFetchData(GET_TEAM_URL));
 }, [dispatch]);
 const teams  = useSelector<any, Array<ITeamData>>(state => state.teams )

 


// Pagination

const lastTeamIndex = useMemo(() => currentPage*teamPerPage,[currentPage, teamPerPage])
const firstTeamIndex = useMemo(() => lastTeamIndex-teamPerPage,[lastTeamIndex, teamPerPage])
const currentTeam = useMemo(() => teams.slice(firstTeamIndex, lastTeamIndex),[firstTeamIndex, lastTeamIndex, teams])

const paginate = useCallback((pageNumber:any) => setCurrentPage(pageNumber),[])



// Pagination


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



              {currentTeam.map(({name,foundationYear,imageUrl,id}) =>
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
          <Pagination
          curretPage={currentTeam}
          PerPage={teamPerPage}
          totalPages={teams.length}
          paginate={paginate}
          />
        </div>
      </div>
  )
}

