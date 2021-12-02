
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import { getTeamInfo } from '../../../modules/actions/getTeamInfo'
import { BurgerMenuSidebar } from '../../../UI/BurgerMenu/burgerMenuSidebar'
import { EditTeam } from '../../../UI/EditTeam/EditTeam'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/Navbar/Navbar'

import cls from './EditTeamPage.module.scss'

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