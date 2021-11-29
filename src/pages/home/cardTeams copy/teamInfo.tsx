
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import { getTeamInfo } from '../../../modules/actions/getTeamInfo'
import { CardTeam } from '../../../UI/Card_team/CardTeam'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'
import { TeamSmallCard } from '../../../UI/TeamSmallCard/TeamSmallCard'

import cls from './teamInfo.module.scss'

 export const TeamInfo = ({match}:any) => {

  const dispatch = useDispatch()

  useEffect( () => {
   
      const id = match.params.id
      dispatch(getTeamInfo(id));
   
 }, [dispatch, match.params.id]);

    const teamInfo  = useSelector<any, Array<ITeamData>>(state => state.getTeamInfo )

    console.log(teamInfo)

  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <div>
          <div className={cls.upContainer}>
          </div>
          <div className={cls.mainContainer}>
{teamInfo &&
          (
            <ul>
              {teamInfo.map(({name,conference,division,foundationYear,imageUrl,id}) =>
              
               <CardTeam
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