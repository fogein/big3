import React from 'react'
import smallCardTeam from '../../../assets/images/teamSmallCard.svg'
import classes from './teamSmallCard.module.scss'

  let cls:any = classes

export const TeamSmallCard:React.FC = ({year}:any) => {
  return (
    // Team card
    <>
     
      <button className={cls.smallCardContainer}>
        <div className={cls.smallCardTop}>
          <img src={smallCardTeam} alt="img" />
        </div>
        <div className={cls.smallCardBot}>
          <div className={cls.smallCardDeskription}>
            <h4 >Portland trail blazers</h4>
            <p className={cls.smallCardP}>Year of foundation: {year}</p>
          </div>
        </div>
      </button>
      
    </>
    // Team card
  )
}
