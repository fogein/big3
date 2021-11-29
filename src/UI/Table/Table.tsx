import React from 'react'
import tablePlayer from '../../assets/tablePlayer.svg'

export const Table: React.FC = () => {
  return (
    <>
      <div className="table__container">
      <table className="table">
        <caption className="table__name"><span className="table__name-text">Roster</span></caption>
        <tr className="head__table">
          <th className="head__table-item">#</th>
          <th className="head__table-item left">Player</th>
          <th className="head__table-item">Height</th>
          <th className="head__table-item">Weight</th>
          <th className="head__table-item">Age</th>
        </tr>
        
        <tr className="body__table">
          {/* col-1 */}
          <td className="body__table-item">10</td>
          <td className="body__table-item"><div className="player__block"><img className="table__img" src={tablePlayer} alt="player_img"/> <span>Bol Bol <p>Centerforward</p></span></div></td>
          <td className="body__table-item">218 cm</td>
          <td className="body__table-item">100 kg</td>
          <td className="body__table-item">21</td>
          {/* col-1 end*/}

        </tr>
        <tr className="body__table">
          {/* col-1 */}
          <td className="body__table-item">10</td>
          <td className="body__table-item"><div className="player__block"><img className="table__img" src={tablePlayer} alt="player_img"/> <span>Bol Bol <p>Centerforward</p></span></div></td>
          <td className="body__table-item">218 cm</td>
          <td className="body__table-item">100 kg</td>
          <td className="body__table-item">21</td>
          {/* col-1 end*/}

        </tr>
        <tr className="body__table">
          {/* col-1 */}
          <td className="body__table-item">10</td>
          <td className="body__table-item"><div className="player__block"><img className="table__img" src={tablePlayer} alt="player_img"/> <span>Bol Bol <p>Centerforward</p></span></div></td>
          <td className="body__table-item">218 cm</td>
          <td className="body__table-item">100 kg</td>
          <td className="body__table-item">21</td>
          {/* col-1 end*/}

        </tr>
        <tr className="body__table">
          {/* col-1 */}
          <td className="body__table-item">10</td>
          <td className="body__table-item"><div className="player__block"><img className="table__img" src={tablePlayer} alt="player_img"/> <span>Bol Bol <p>Centerforward</p></span></div></td>
          <td className="body__table-item">218 cm</td>
          <td className="body__table-item">100 kg</td>
          <td className="body__table-item">21</td>
          {/* col-1 end*/}

        </tr>
        <tr className="body__table">
          {/* col-1 */}
          <td className="body__table-item">10</td>
          <td className="body__table-item"><div className="player__block"><img className="table__img" src={tablePlayer} alt="player_img"/> <span>Bol Bol <p>Centerforward</p></span></div></td>
          <td className="body__table-item">218 cm</td>
          <td className="body__table-item">100 kg</td>
          <td className="body__table-item">21</td>
          {/* col-1 end*/}

        </tr>
        <tr className="body__table">
          {/* col-1 */}
          <td className="body__table-item">10</td>
          <td className="body__table-item"><div className="player__block"><img className="table__img" src={tablePlayer} alt="player_img"/> <span>Bol Bol <p>Centerforward</p></span></div></td>
          <td className="body__table-item">218 cm</td>
          <td className="body__table-item">100 kg</td>
          <td className="body__table-item">21</td>
          {/* col-1 end*/}

        </tr>
        

      </table>
      </div>
    </>
  )
}
