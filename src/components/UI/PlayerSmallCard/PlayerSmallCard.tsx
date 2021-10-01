import React from 'react'
import smallCardPlayer from '../../assets/playerSmallCard.png'
import  './playerSmallCard.scss'

export const PlayerSmallCard:React.FC = () => {
  return (
    // Player card
    <>
      <button className="small__card-container">
        <div className="small__cardPayers-top">
          <img src={smallCardPlayer} alt="img" />
        </div>
        <div className="small__card-bot">
          <div className="small__card-deskription">
            <h4>Portland trail blazers</h4>
            <p className='small__card-p'>Year of foundation: 1970</p>
          </div>
        </div>
      </button>
    </>
    // Player card
  )
}
