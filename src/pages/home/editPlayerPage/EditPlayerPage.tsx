
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPlayerData } from '../../../api/dto/teamsAndPlayers'
import { getPlayerInfoFetch } from '../../../modules/playerInfo/getPlayerInfoSlicer'
import { BurgerMenuSidebar } from '../../../UI/BurgerMenu/burgerMenuSidebar'
import { EditPlayer } from '../../../UI/editPlayer/editPlayer'
import { Header } from '../../../UI/header/Header'
import { Navbar } from '../../../UI/navbar/Navbar'
import teamsImg  from '../../../assets/images/group_person.svg'
import playersImg  from '../../../assets/images/activePlayers.svg'

import cls from './editPlayerPage.module.scss'

 export const EditPlayerPage = ({match}:any) => {

  const dispatch = useDispatch()
   const id = match.params.id

   useEffect( () => {
   
    dispatch(getPlayerInfoFetch(id));
 
}, [dispatch,id]);

  
const playerInfo  = useSelector<any, any>(state => state.getPlayerInfo )



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
            <ul>
              {playerInfo.playerInfo?.map(({name,teamName,number,position,team,birthday,height,weight,avatarUrl,id}:IPlayerData) =>
              
              <EditPlayer
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
          </div>
        </div> 
      </div>
  )
}