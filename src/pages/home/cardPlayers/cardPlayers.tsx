import React, { useEffect, useState } from 'react'
import { AddButton } from '../../../UI/buttons/addButton/addButton'
import { Header } from '../../../UI/header/header'
import { Navbar } from '../../../UI/navbar/navbar'
import {  MAIN_URL } from '../../../modules/teamList/teamsAndPlayersConstants'
import { IPlayerData, ITeamData } from '../../../api/dto/teamsAndPlayers'
import cls from './cardPlayers.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { BurgerMenuSidebar } from '../../../UI/burgerMenu/burgerMenuSidebar'
import { Box, Chip, MenuItem, OutlinedInput, Pagination, Select} from '@mui/material'
import PaginationItem from '@mui/material/PaginationItem';
import { Search } from '../../../UI/search/Search'
import { PlayerSmallCard } from '../../../UI/playerSmallCard/playerSmallCard'
import { playersFetchData } from '../../../modules/playersList/playersSlicer'
import { teamsFetchData } from '../../../modules/teamList/teamsSlicer'



 export const CardPlayers: React.FC = () => {
 
const [page,setPage]=useState(1)








  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(teamsFetchData(`${MAIN_URL}/api/Team/GetTeams`));
    dispatch(playersFetchData(`${MAIN_URL}/api/Player/GetPlayers?PageSize=${6}&Page=${page}&`));
 }, [dispatch,page]);
 const players  = useSelector<any, any>(state => state.players )
const{error}:any = useSelector<any, any>(state => state.players )
 
const teams  = useSelector<any, any>(state => state.teams )


 const [pagesQty,setPageQty]=useState(0)

 
useEffect(()=>{
  setPageQty(Math.ceil(players.players.count/players.players.size))
},[players,error])

// if(error)
// {localStorage.clear()
//   window.location.reload()}


const handleChange = async(event:any) => {
  const {
    target: {value},
  } = event;
  setId(value)
  
};
const setId = async(e:any) => {
  setPersonName(e);

}

const [personName, setPersonName] = useState([]);


console.log('person',personName);





  return (

      <div className={cls.bg}>
        <Header/>
        <BurgerMenuSidebar pageWrapId={"page-wrap"}/>
        <Navbar/>
        
        <div  className={cls.container}>
        
          <div className={cls.upContainer}>
            <Search
            page={page}
            />
                          <Select
                          className={cls.selectTeam}
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected:any) => (
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            {selected?.map((value:any) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                       
                      >
                        {teams.teams.data?.map(({name,id}:ITeamData) => (
                          <MenuItem
                            key={id}
                            value={id}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
            <AddButton
            link='/players/addPlayer'
            />
          </div>
          <div className={cls.mainContainer} >
              <div >
              <ul className={cls.smallCardContainer}>



              {players.players.data?.map(({team,name,number,avatarUrl,id}:IPlayerData) =>
                
                <PlayerSmallCard 
                key={id}
                name={name}
                number={number}
                avatarUrl={avatarUrl}
                team={team}
                id={id} 
                />
                
              )}




              
              </ul>
              </div>
          </div>
          <div className={cls.paginationContainer}>
          <Pagination
          count={pagesQty}
          page={page}
          color='primary'
          onChange={(_,num:number)=> setPage(num)}
          renderItem={(item) => (
            <PaginationItem
            
              {...item}
            />
          )}
          />
          </div>
        </div>
      </div>
  )
}

