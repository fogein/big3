/* eslint-disable @typescript-eslint/no-array-constructor */

import React, { useEffect, useState } from 'react'
import { addTeam, getApiResource } from '../../../api/request/teamAndPlayersApi'
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



 export const CardTeams: React.FC = () => {
 
  const [currentPage,setCurrentPage] = useState(1)
  const [teamPerPage] = useState(6)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(teamsFetchData(GET_TEAM_URL));
 }, [dispatch]);
 const teams  = useSelector<any, Array<ITeamData>>(state => state.teams )




// Search
  const [value, setValue]=useState("");
  const filteredTeams = teams.filter((e:any) => e.name.toLowerCase().includes(value.toLowerCase()))
 

// Search

// Add team
const addTeamHandler = async () =>{
  let testObject = {
    name: "kife2r32",
    foundationYear: 2010,
    division: "3",
    conference: "qwerty",
    imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg"
  }
  addTeam(testObject)
  
}
// Add team

// Pagination

const lastTeamIndex = currentPage*teamPerPage
const firstTeamIndex = lastTeamIndex-teamPerPage
const currentTeam = filteredTeams.slice(firstTeamIndex, lastTeamIndex)

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
            handler={addTeamHandler}
            />
          </div>
          <div className={cls.mainContainer}>
          <ul className={cls.smallCardContainer}>
          {currentTeam.map(({name,foundationYear,imageUrl,id}) =>
            <TeamSmallCard 
            name={name}
            foundationYear={foundationYear}
            imageUrl={imageUrl}
            id={id}
            />
          )}
          </ul>
          </div>
         <div className={cls.paginationContainer}> <Pagination
          curretPage={currentTeam}
          PerPage={teamPerPage}
          totalPages={filteredTeams.length}
          paginate={paginate}
          /></div>
        </div>
        
      </div>
  )
}

