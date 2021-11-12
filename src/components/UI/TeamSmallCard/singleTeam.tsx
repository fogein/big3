import React from 'react'
import smallCardTeam from '../../../assets/images/teamSmallCard.svg'
import cls from './teamSmallCard.module.scss'
import { ITeamData } from '../../../types/teams' 


export const SingleTeam = (props:ITeamData) => {
  return (
        <li>
        <div className={cls.smallCardTop}>
          <img src={smallCardTeam} alt="img" />
        </div>
        <div className={cls.smallCardBot}>
          <div className={cls.smallCardDeskription}>
            <h4 >{props.name}</h4>
            <p className={cls.smallCardP}>Year of foundation: {props.foundationYear}</p>
          </div>
          </div>
        </li>
  )
}
