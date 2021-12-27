
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import {  deleteTeam } from '../../../api/request/teamAndPlayersApi'
import { playersFetchData } from '../../../modules/playersList/playersSlicer'
import { getTeamInfoFetch } from '../../../modules/teamInfo/getTeamInfoSlicer'
import { MAIN_URL } from '../../../modules/teamList/teamsAndPlayersConstants'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { CardTeamInfo } from '../../../UI/cardTeamInfo/cardTeam'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'

import cls from './teamInfo.module.scss'

 export const TeamInfo = ({match}:any) => {

  const dispatch = useDispatch()
  const history = useHistory()
   const id = match.params.id

  useEffect( () => {
   
      dispatch(getTeamInfoFetch(id));
      dispatch(playersFetchData(`${MAIN_URL}/api/Player/GetPlayers?TeamIds=${id}`));
   
 }, [dispatch,id]);

    
 const teamInfo  = useSelector<any, any>(state => state.getTeamInfo )
 const players  = useSelector<any, any>(state => state.players ) 
console.log(players);

 const deleteHamdler = () => {
  deleteTeam(match.params.id);

   setTimeout(() => {
    history.push('/teams')
   }, 500);
 }

  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <BurgerMenuSidebar/>
        <div>
          <div className={cls.mainContainer}>
      
            { teamInfo.status ==='resolved' &&
              (
                <ul>
              {teamInfo.teamInfo?.map(({name,conference,division,foundationYear,imageUrl,id}:ITeamData) =>
              
               <CardTeamInfo
               deleteHandler={deleteHamdler}
               name={name}
               conference={conference}
               division={division}
               foundationYear={foundationYear}
               imageUrl={imageUrl}
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