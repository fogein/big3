import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getTeamSearch } from '../../api/request/teamAndPlayersApi';
import search from '../../assets/images/search.svg'
import { teamSeacrh } from '../../modules/teamList/teamsSlicer';
import { teamsFetchData } from '../../modules/teamList/teamsSlicer';
import { MAIN_URL } from '../../modules/teamList/teamsAndPlayersConstants';


import cls from './search.module.scss'

interface ISearch{
  page?:any
  
}

export const Search = (props:ISearch) => {
  const [inputSeacrhValue,setInputSeacrhValue]=useState('');
  const dispatch = useDispatch()
  const getResourse = async(param:any) => {
    const res = await getTeamSearch(param,6)
    dispatch(teamSeacrh(res))
    if(!param){
      dispatch(teamsFetchData(`${MAIN_URL}/api/Team/GetTeams?PageSize=${6}&Page=${props.page}`))
      
      
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


