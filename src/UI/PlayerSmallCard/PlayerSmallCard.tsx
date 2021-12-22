
import { IPlayerData } from '../../api/dto/teamsAndPlayers'

import cls from './playerSmallCard.module.scss'


export const PlayerSmallCard = (props:IPlayerData) => {
  return (
    // Player card
    
      <li className={cls.smallCardItem} key={props.id}>
        <div className={cls.smallCardTop}>
          <img className={cls.cardImg} src={props.avatarUrl} alt="img" />
        </div>
        <div className={cls.smallCardBot}>
          <div className={cls.smallCardDescription}>
            <h4>{props.name} <span>{props.number}</span></h4>
            <p className={cls.smallCardP}>{props.team}</p>
          </div>
        </div>
      </li>
  
    // Player card
  )
}

