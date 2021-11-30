
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import {  deleteTeam } from '../../../api/request/teamAndPlayersApi'
import { getTeamInfo } from '../../../modules/actions/getTeamInfo'
import { update } from '../../../modules/actions/teams'
import { CardTeamInfo } from '../../../UI/Card_team/CardTeam'
import { EditTeam } from '../../../UI/EditTeam/EditTeam'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'

import cls from './EditTeamPage.module.scss'

 export const EditTeamPage = ({match}:any) => {

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
        <div>
          <div className={cls.upContainer}>
          </div>
          <div className={cls.mainContainer}>
            <ul>
              {teamInfo.map(({name,conference,division,foundationYear,imageUrl,id}) =>
              
              <EditTeam
              id={id}
              />
             
              )}

            </ul>
          </div>
        </div> 
      </div>
  )
}