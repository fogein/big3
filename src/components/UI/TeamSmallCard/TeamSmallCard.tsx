import React from 'react'
import smallCardTeam from '../../../assets/images/teamSmallCard.svg'
import './teamSmallCard.scss'

export const TeamSmallCard:React.FC = ({year}:any) => {
  return (
    // Team card
    <>
     
      <button className="small__card-container">
        <div className="small__card-top">
          <img src={smallCardTeam} alt="img" />
        </div>
        <div className="small__card-bot">
          <div className="small__card-deskription">
            <h4 >Portland trail blazers</h4>
            <p className='small__card-p'>Year of foundation: {year}</p>
          </div>
        </div>
      </button>
      
    </>
    // Team card
  )
}
