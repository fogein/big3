import React, { useEffect, useState } from 'react'
import cls from './teamSmallCard.module.scss'
import { ITeamData } from '../../../types/teams' 
// import smallCardTeam from '../../../assets/images/teamSmallCard.svg'
import { GET_TEAM_URL } from '../../../core/redux/constants/Teams'
import { getApiResource } from '../../../api/teamApi'
import { nanoid } from 'nanoid'



export const TeamSmallCard = (props:ITeamData) => {
  const [team,setTeam] = useState([]);


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
  console.log(team)
  
  return (
    // Team card   
      <ul className={cls.smallCardContainer}>
       {team.map(({name,foundationYear,imageUrl}) => 
        <li key={name}>
        <div className={cls.smallCardTop}>
          <img src={imageUrl} alt="img" />
        </div>
        <div className={cls.smallCardBot}>
          <div className={cls.smallCardDeskription}>
            <h4 >{name}</h4>
            <p className={cls.smallCardP}>Year of foundation: {foundationYear}</p>
          </div>
          </div>
        </li>
       )}
      </ul>
    // Team card
  )
}
