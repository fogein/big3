import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ITeamData } from '../../api/dto/teamsAndPlayers';
import { getTeamSearch } from '../../api/request/teamAndPlayersApi';
import search from '../../assets/images/search.svg'
import { teamSeacrh, teamsFetchData } from '../../modules/actions/teams';
import { GET_TEAM_URL } from '../../modules/constants/TeamsAndPlayers';


import cls from './Search.module.scss'

interface ISearch{
  PageSize: number;
  
}

export const Search = (props:ISearch) => {
  const [inputSeacrhValue,setInputSeacrhValue]=useState('');
  const dispatch = useDispatch()
  const teams  = useSelector<any, Array<ITeamData>>(state => state.teams )
  const getResourse = async(param:any) => {
    const res = await getTeamSearch(param,props.PageSize)
    dispatch(teamSeacrh(res))
    if(!param){
      dispatch(teamsFetchData(GET_TEAM_URL))
      console.log(teams);
      
      
    }
    
  }

const searchRes  = useSelector<any, any>(state => state.teamsSeacrhRes )



  const handleInputChange = (e:any) => {
    const value = e.target.value;
    setInputSeacrhValue(value)
    getResourse(value)
    
  }

  return (<>
    <form className={cls.searchForm} action="#" method="#">
        <input className={cls.searchInput} 
        type="text" 
        name="search" 
        id="search" 
        value={inputSeacrhValue}
        placeholder="Search..."
        onChange={handleInputChange}
        />
        <button className={cls.searchButton} type="submit"><img src={search} alt="search" /></button>
      </form>
      </>
  )
}


