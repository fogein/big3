
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import {  deleteTeam } from '../../../api/request/teamAndPlayersApi'
import { getTeamInfo } from '../../../modules/teamInfo/getTeamInfoAction'
import { update } from '../../../modules/teamList/teamsAction'
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
   
      dispatch(getTeamInfo(id));
   
 }, [dispatch,id]);

    
 const teamInfo  = useSelector<any, Array<ITeamData>>(state => state.getTeamInfo )






 const deleteHamdler = () => {
  deleteTeam(match.params.id);
  dispatch(update())

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
{teamInfo &&
          (
            <ul>
              {teamInfo.map(({name,conference,division,foundationYear,imageUrl,id}) =>
              
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