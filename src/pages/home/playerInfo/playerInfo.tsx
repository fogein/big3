
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { IPlayerData } from '../../../api/dto/teamsAndPlayers'
import {  deletePlayer } from '../../../api/request/teamAndPlayersApi'
import { getPlayerInfoFetch } from '../../../modules/playerInfo/getPlayerInfoSlicer'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { CardPlayerInfo } from '../../../UI/cardPlayerInfo/cardPlayer'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'
import teamsImg  from '../../../assets/images/group_person.svg'
import playersImg  from '../../../assets/images/activePlayers.svg'

import cls from './playerInfo.module.scss'

 export const PlayerInfo = ({match}:any) => {

  const dispatch = useDispatch()
  const history = useHistory()
   const id = match.params.id

  useEffect( () => {
   
      dispatch(getPlayerInfoFetch(id));
   
 }, [dispatch,id]);

    
 const playerInfo  = useSelector<any, any>(state => state.getPlayerInfo )

 

 const deleteHamdler = () => {
  deletePlayer(match.params.id);

   setTimeout(() => {
    history.push('/players')
   }, 500);
 }

  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar
        teamImage={teamsImg}
        playersImage={playersImg}
        />
        <BurgerMenuSidebar/>
        <div>
          <div className={cls.mainContainer}>
      
            { playerInfo.status ==='resolved' &&
              (
                <ul>
              {playerInfo.playerInfo?.map(({name,teamName,number,position,team,birthday,height,weight,avatarUrl,id}:IPlayerData) =>
              
               <CardPlayerInfo
               deleteHandler={deleteHamdler}
               name={name}
               teamName={teamName}
               number={number}
               position={position}
               team={team}
               birthday={birthday}
               height={height}
               weight={weight}
               avatarUrl={avatarUrl}
               id={id}
               />
             
              )}

            </ul>
              )
            }
        

          </div>
        </div> 
      </div>
  )
}