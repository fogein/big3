
import React, { useEffect, useState } from 'react'
import { getApiResource } from '../../../api/teamApi'
import { AddButton } from '../../../components/UI/buttons/Add_button/Add_button'
import { Header } from '../../../components/UI/header/Header'
import { Navbar } from '../../../components/UI/Navbar/Navbar'
import { Pagination } from '../../../components/UI/Pagination/Pagination'
import { Search } from '../../../components/UI/Search/Search'
import { TeamSmallCard } from '../../../components/UI/TeamSmallCard/TeamSmallCard'
import { GET_TEAM_URL } from '../../../core/redux/constants/Teams'
import { ITeamData } from '../../../types/teams'
import cls from './card_team.module.scss'



export const Card_teams: React.FC = () => {
 
  const [team,setTeam] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)
  const [teamPerPage] = useState(6)

  const getResource = async (url:any) => {
    const res = await getApiResource(url);


    const teamList = res.data.map(({name,foundationYear,division,conference,imageUrl,id}:ITeamData) => { 
      return {
        name,
        foundationYear,
        imageUrl,
        id

      }
    })

    setTeam(teamList)
  }
  

  useEffect(() => {
    getResource(GET_TEAM_URL)
  }, [])
  


// Search
  const [value, setValue]=useState("");
  const filteredTeams = team.filter((e:any) => e.name.toLowerCase().includes(value.toLowerCase()))
 

// Search

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
            filteredTeams={filteredTeams}
            setTeam={setTeam}
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
          <Pagination
          curretPage={currentTeam}
          teamPerPage={teamPerPage}
          totalTeams={filteredTeams.length}
          paginate={paginate}
          />
        </div>
      </div>
  )
}
