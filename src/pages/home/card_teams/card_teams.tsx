
import React, { useEffect, useState } from 'react'
import { getApiResource } from '../../../api/teamApi'
import { AddButton } from '../../../components/UI/buttons/Add_button/Add_button'
import { Header } from '../../../components/UI/header/Header'
import { Navbar } from '../../../components/UI/Navbar/Navbar'
import { Search } from '../../../components/UI/Search/Search'
import { TeamSmallCard } from '../../../components/UI/TeamSmallCard/TeamSmallCard'
import { GET_TEAM_URL } from '../../../core/redux/constants/Teams'
import { ITeamData } from '../../../types/teams'
import classes from './card_team.module.scss'

let cls:any = classes

export const Card_teams: React.FC = () => {
  const [team,setTeam] = useState(null);


  const getResource = async (url:any) => {
    const res = await getApiResource(url);

    const teamList = res.data.map(({name,foundationYear,division,conference,imageUrl,id}:ITeamData) => { 
      return {
        name,
        foundationYear,
        imageUrl

      }
    })
    
    
    setTeam(teamList)
  }

  useEffect(() => {
    getResource(GET_TEAM_URL)
  }, [])

  console.log(team);
  
  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <div>
          <div className={cls.upContainer}>
            <Search/>
            <AddButton/>
          </div>
          <div className={cls.mainContainer}>
             {team && <TeamSmallCard team={team}/>}
          </div>
        </div>
      </div>
  )
}
