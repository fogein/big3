import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IPlayerData } from '../../api/dto/teamsAndPlayers'
import { getPlayerId } from '../../api/request/teamAndPlayersApi'
import cls from './playerSmallCard.module.scss'




export const PlayerSmallCard = (props:IPlayerData) => {

// eslint-disable-next-line @typescript-eslint/no-array-constructor
const[name,setName]=useState(Array())


  

useEffect(() => {

const name:IPlayerData = getPlayerId(props.id)
name.then(function(result:any) {
  return setName([result.data])
})
}, [props.id])

  return (
    // Player card
    <Link className={cls.link} to={`/player/${props.id}`}  >
      <li className={cls.smallCardItem} key={props.id}>
        <div className={cls.smallCardTop}>
          <img className={cls.cardImg} src={props.avatarUrl} alt="img" />
        </div>
        <div className={cls.smallCardBot}>
          <div className={cls.smallCardDescription}>
            <h4 className={cls.namePlayer}>{props.name} <span>#{props.number}</span></h4> 
            {name.map(({teamName}:IPlayerData) =>
                <p className={cls.smallCardP}>{teamName}</p>
              )}
              
          </div>
        </div>
      </li>
      </Link>
    // Player card
  )
}

