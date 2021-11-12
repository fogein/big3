import React, { useState } from 'react'
import cls from './teamSmallCard.module.scss'
import { ITeamData } from '../../../types/teams' 
import { SingleTeam } from './singleTeam'



export const TeamSmallCard = (props:ITeamData) => {
  const [defaultTeam={
      name:'default Team',
      foundationYear:'default year'
  }, setTeam]=useState('');
 
  return (
    // Team card   
      <ul className={cls.smallCardContainer}>
        <SingleTeam/>
      </ul>
    // Team card
  )
}
