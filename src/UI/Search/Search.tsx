import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getTeamSearch } from '../../api/request/teamAndPlayersApi';
import search from '../../assets/images/search.svg'
import { teamSeacrh, teamsFetchData } from '../../modules/teamList/teamsAction';
import { GET_TEAM_URL } from '../../modules/teamList/teamsAndPlayersConstants';


import cls from './search.module.scss'

interface ISearch{
  PageSize: number;
  
}

export const Search = (props:ISearch) => {
  const [inputSeacrhValue,setInputSeacrhValue]=useState('');
  const dispatch = useDispatch()
  const getResourse = async(param:any) => {
    const res = await getTeamSearch(param,props.PageSize)
    dispatch(teamSeacrh(res))
    if(!param){
      dispatch(teamsFetchData(GET_TEAM_URL))
      
      
    }
    
  }




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


