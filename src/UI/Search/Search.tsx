import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import search from '../../assets/images/search.svg'
import { teamSeacrh } from '../../modules/teamList/teamsSlicer';


import cls from './search.module.scss'

interface ISearch{
  page?:any
  
}

export const Search = (props:ISearch) => {
  const [inputSeacrhValue,setInputSeacrhValue]=useState('');
  const dispatch = useDispatch()

  const handleInputChange = (e:any) => { 
    const value = e.target.value;
    setInputSeacrhValue(value)
    dispatch(teamSeacrh(value))
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


