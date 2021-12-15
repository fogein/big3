
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import { getTeamInfo } from '../../../modules/teamInfo/getTeamInfoAction'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { EditTeam } from '../../../UI/editTeam/editTeam'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'

import cls from './editTeamPage.module.scss'

 export const EditTeamPage = ({match}:any) => {

  const dispatch = useDispatch()
   const id = match.params.id

  useEffect( () => {
   
      dispatch(getTeamInfo(id));
   
 }, [dispatch,id]);

    
 const teamInfo  = useSelector<any, Array<ITeamData>>(state => state.getTeamInfo )



  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar/>
        <BurgerMenuSidebar/>
        <div>
         
          <div className={cls.mainContainer}>
            <ul>
              {teamInfo.map(({name,conference,division,foundationYear,imageUrl,id}) =>
              
              <EditTeam
              name={name}
              conference={conference}
              division={division}
              foundationYear={foundationYear}
              imageUrl={imageUrl}
              id={id}
              />
             
              )}

            </ul>
          </div>
        </div> 
      </div>
  )
}