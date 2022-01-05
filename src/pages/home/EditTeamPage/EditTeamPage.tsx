
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITeamData } from '../../../api/dto/teamsAndPlayers'
import { getTeamInfoFetch } from '../../../modules/teamInfo/getTeamInfoSlicer'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { EditTeam } from '../../../UI/editTeam/editTeam'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'
import playersImg  from '../../../assets/images/person.svg'
import teamImg  from '../../../assets/images/activeTeam.svg'
import cls from './editTeamPage.module.scss'

 export const EditTeamPage = ({match}:any) => {

  const dispatch = useDispatch()
   const id = match.params.id

  useEffect( () => {
   
      dispatch(getTeamInfoFetch(id));
   
 }, [dispatch,id]);

    
 const teamInfo  = useSelector<any, any>(state => state.getTeamInfo )



  return (

      <div className={cls.bg}>
        <Header/>
        <Navbar
                playersImage={playersImg}
                teamImage={teamImg}
        />
        <BurgerMenuSidebar/>
        <div>
         
          <div className={cls.mainContainer}>
            <ul>
              {teamInfo.teamInfo?.map(({name,conference,division,foundationYear,imageUrl,id}:ITeamData) =>
              
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