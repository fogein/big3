
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import { getTeamInfo } from '../../../modules/actions/getTeamInfo'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'
import { TeamSmallCard } from '../../../UI/TeamSmallCard/TeamSmallCard'

import cls from './teamInfo.module.scss'

 export const TeamInfo = ({match}:any) => {

  const dispatch = useDispatch()

  useEffect( () => {
    (async() => {
      const id = match.params.id
      dispatch(getTeamInfo(id));
    })();
 }, [dispatch, match.params.id]);

    const teamInfo  = useSelector<any, Array<ITeamData>>(state => state.getTeamInfo )

    

  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <div>
          <div className={cls.upContainer}>
          </div>
          <div className={cls.mainContainer}>
          {teamInfo.map(({name,foundationYear,imageUrl,id}) =>
            <TeamSmallCard 
            name={name}
            foundationYear={foundationYear}
            imageUrl={imageUrl}
            id={id}
            />
          )}
          </div>
        </div> 
      </div>
  )
}

