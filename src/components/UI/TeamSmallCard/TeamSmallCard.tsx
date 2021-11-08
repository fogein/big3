import React from 'react'
import smallCardTeam from '../../../assets/images/teamSmallCard.svg'
import classes from './teamSmallCard.module.scss'

  let cls:any = classes
  
  interface ITeam {
    foundationYear?:number
    name?:string
    team:any

  }

export const TeamSmallCard = (props:ITeam) => {
  return (
    // Team card   
      <ul className={cls.smallCardContainer}>
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
      </ul>
    // Team card
  )
}
