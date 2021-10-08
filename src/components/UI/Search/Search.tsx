import React from 'react'
import search from '../../../assets/images/search.svg'
import classes from './Search.module.scss'

let cls :any = classes

export const Search:React.FC = () => {
  return (
    <form className={cls.searchForm} action="#" method="#">
        <input className={cls.searchInput} type="text" name="search" id="search" placeholder="Search..."/>
        <button className={cls.searchButton} type="submit"><img src={search} alt="search" /></button>
      </form>
  )
}
