import React from 'react'
import smallCardPlayer from '../../assets/images/playerSmallCard.png'
let classes = require ('./playerSmallCard.module.scss')

  let cls:any = classes
export const PlayerSmallCard:React.FC = () => {
  return (
    // Player card
    <>
      <button className={cls.smallCardContainer}>
        <div className={cls.smallCardPayersTop}>
          <img src={smallCardPlayer} alt="img" />
        </div>
        <div className={cls.smallCardBot}>
          <div className={cls.smallCardDeskription}>
            <h4>Portland trail blazers</h4>
            <p className={cls.smallCardP}>Year of foundation: 1970</p>
          </div>
        </div>
      </button>
    </>
    // Player card
  )
}
